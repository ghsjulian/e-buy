// Requiring Packages...
const multer = require("multer");
const path = require("path");

// Function to generate a unique file name
const generateFileName = file => {
    const timestamp = Date.now();
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `ghs__${timestamp}_${randomNum}${path.extname(file.originalname)}`;
};

const uploadFile = folderPath => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, folderPath);
        },
        filename: (req, file, cb) => {
            cb(null, generateFileName(file));
        }
    });

    // Optional: Add file filter to restrict file types
    const fileFilter = (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif/; // Add more types as needed
        const extname = allowedTypes.test(
            path.extname(file.originalname).toLowerCase()
        );
        const mimetype = allowedTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error("Error: File type not supported!"), false);
        }
    };

    return multer({
        storage: storage,
        fileFilter: fileFilter,
        limits: { fileSize: 15 * 1024 * 1024 } // Limit file size to 5MB
    });
};

module.exports = uploadFile;
