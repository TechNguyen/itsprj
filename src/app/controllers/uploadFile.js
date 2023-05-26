const multer = require('multer')
const store = multer.diskStorage({
    destination: 'public/accounts/images',
    filename: function (req, file, cb) {
        const name = file.originalname.toLowerCase().split(' ').join('_');
        cb(null, name + '-' + Date.now());
    }
});
const upload = multer({ storage: store });
module.exports = upload;