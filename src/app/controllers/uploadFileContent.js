const multer = require('multer')
const storeage = multer.diskStorage({
    destination:  'src/public/feeds/images/',
    filename: (req, file, cb) => {
        const name =  file.originalname
        cb(null, name)
    }
})
const upload = multer({ storage: storeage })

module.exports = {upload}