import React, { useRef, useState, useEffect } from "react";
import { imageUploader } from "../../util/uplodApi";

const UploadImage = () => {
  const [imageloaded, setImageLoaded] = useState(null);
  const fileInput = useRef();
  const changeHanlder = (event) => {
    if (event.target.files.length !== 0) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      imageUploader(event.target.files[0])
        .then((ok) => {
          if (ok) console.log("ok ");
          else {
            console.log("there was an error ");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleClick = () => {
    document.getElementById("selectFile").click();
    const result = document.getElementById("selectFile").value;
    console.log(result);
    setImageLoaded(result);
  };
  return (
    <div>
      <h1>
        Upload your image here
        <hr />
        <div>
          <input
            id="selectFile"
            type="file"
            ref={fileInput}
            style={{ display: "none" }}
            onChange={changeHanlder}
          />
          <button onClick={handleClick}>Select file</button>
        </div>
      </h1>
    </div>
  );
};
export default UploadImage;
