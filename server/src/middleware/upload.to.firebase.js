const {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytesResumable,
} = require("firebase/storage");
const { initializeApp } = require("firebase/app");
const config = require("../config/firebase.config");

// Initialize a firebase application
initializeApp(config.firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

const giveCurrentDateTime = () => {
    const today = new Date();
    const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    return dateTime;
};

module.exports = async (req, res, next) => {
    try {
        const filesUpload = [req.file] || req.files;
        const filePromises = filesUpload.map(async (file) => {
            const storageRef = ref(
                storage,
                `files/${file.originalname + "       " + giveCurrentDateTime()}`
            );
            // Create file metadata including the content type
            const metadata = {
                contentType: file.mimetype,
            };
            // Upload the file in the bucket storage
            const snapshot = await uploadBytesResumable(
                storageRef,
                file.buffer,
                metadata
            );
            // Grab the public url
            const downloadURL = await getDownloadURL(snapshot.ref);

            return downloadURL;
        });
        req.uploadedFiles = await Promise.all(filePromises);
        next();
    } catch (error) {
        console.log(error);
        return res
            .status(400)
            .json("There's still a problem with uploading files ");
    }
};
