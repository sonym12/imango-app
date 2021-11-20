import React, { useState } from "react";
import "./ImageUpload.css";
import Button from "@material-ui/core/Button";
import { storage, db } from "../Firebase";
import firebase from "firebase";

function ImageUpload({ username }) {
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const [noLikes, setNoLikes] = useState(0);
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);

  const uploadFileWithClick = () => {
    document.getElementsByClassName("imageFile")[0].click();
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleClose = () => {
    setOpen(false)
}

  const handleUpload = (event) => {
    event.preventDefault();

    if (image == "") {
      db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        caption: caption,
        imageUrl: image,
        noLikes: noLikes,
        username: username,
      });
    } else {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                imageUrl: url,
                noLikes: noLikes,
                username: username,
              });
              handleClose();
              setProgress(0);
              setCaption("");
              setImage(null);
            });
        }
      );
    }
  };

  return (
    <div className="imageupload">
      <center>
        <div
          className="imageupload__imageuploadModal"
          onClick={uploadFileWithClick}
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/apple-camera.png"
            className="imageupload__gallery"
            alt="camera image"
          />
          <input type="file" className="imageFile" onChange={handleChange} />
          <h3>Add Photo</h3>
        </div>
        <h2 className={`imageText ${image && "show"}`}>
          Image is added and will be displayed after clicking the Post button
        </h2>
        <Button
          type="submit"
          onClick={handleUpload}
          className="imageupload__submitButton"
        >
          Post
        </Button>
      </center>
      <progress
        value={progress}
        max="100"
        className={`progress ${progress && "show"}`}
      />
    </div>
  );
}

export default ImageUpload;
