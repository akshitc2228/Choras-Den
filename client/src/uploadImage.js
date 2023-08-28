import { storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export const uploadImage = (file, storagePath) => {
    return new Promise((resolve, reject) => {
      if (file === null) {
        reject("No file selected");
        return;
      }

      const imageRef = ref(
        storage,
        `${storagePath}/${file.name + v4()}`
      ); //this creates the reference for the image you want to upload

      uploadBytes(imageRef, file)
        .then(() => getDownloadURL(imageRef)) // Get the download URL after upload
        .then((downloadURL) => {
          resolve(downloadURL); // Resolve the download URL
        })
        .catch((error) => {
          reject(error); // Reject if there's an error during upload or URL retrieval
        });
    });
  };