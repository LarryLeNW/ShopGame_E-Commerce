const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const multer = require("multer");
const allowedImageTypes = ["image/jpeg", "image/png"];
const { initializeApp } = require("firebase/app");
const config = require("../config/firebase.config");
const uploadToFirebase = require("../middleware/upload.to.firebase");
initializeApp(config.firebaseConfig);

const fileFilter = (req, file, cb) => {
    if (allowedImageTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
        req.fileValidationError = "Không nhận dạng ảnh này";
    }
};

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter,
});

router.get("/users", userControllers.getUser);
router.put("/editUser", userControllers.editUser);
router.post("/", upload.single("filename"));

router.put(
    "/editAvatarUser",
    upload.single("images"),
    uploadToFirebase,
    userControllers.editAvatarUser
);

module.exports = router;
