require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const http = require('http')
const app = express();
const handlebars = require("express-handlebars");
const methodOverride = require('method-override')
const path = require("path");
const port = process.env.PORT;
const route = require("./router");
const db = require("./config/database");
const nodemailer = require('nodemailer');
const {Server} = require('socket.io')
const bodyParser = require('body-parser')
const cookParser = require('cookie-parser')
const server = http.createServer(app);
const io = new Server(server)
// Connect database
db.connect();
//overide Header 
app.use(methodOverride('_method'))
// HTTP logger
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookParser())
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    defaultLayout: 'main'
  }
  )
);
app.set("view engine", "hbs");  
app.set("views", path.join(__dirname, "resource" ,"views"));
app.get('/', (req, res) => {
    res.render('home')
})

io.on('connection', (socket) => {
  socket.on('on-post', data => {
    io.emit('user-post',data)
  });
})
// Routers
route(app);
server.listen(port, () => {
  console.log(`http::${port}`);
});

