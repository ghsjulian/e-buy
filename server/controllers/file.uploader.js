

class FileUploader {
 async upload(req,res){
    const body = req.body
    console.log('Body Data -> ',body)
    return res.json({
        message : "This is from FileUploader Controller"
    })
 }
}

module.exports = new FileUploader()