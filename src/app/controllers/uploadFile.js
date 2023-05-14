const multer = require('multer')
const storage  = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './upload')
    }, 
    filename: function(req,file,cb) {
        let filearr = file.originalname.split('.')
        let filename = file[0];
        let filext = file[1];
        cb(null, filename + '-' + Date.now() + '.' + filext )
    }
})
const upload = multer({
    storage: storage
}).single('sameple_image')
class UploadFile {
    upload(req,res,next) {
        if(error) {
            res.end('file error')
        } else {
            res.end('file success')
        }
    }
       
}
module.exports = new UploadFile()