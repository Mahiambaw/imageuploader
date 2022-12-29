import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./ImageList.css";

const ImageLists = () => {
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/v1/images`);
        console.log("Fetched images");
        const data = await response.json();
        console.log(data.data.allImages);
        setImagesList(data.data.allImages);
      } catch (err) {
        console.log(err);
        console.log("Product couldn't be found.");
      }
    };

    getImages();
  }, []);

  if (imagesList) {
    return (
      <div className="image-container">
        {imagesList.map((img, index) => (
          <div className="image-box" key={index}>
            <img className="img" src={`data:;base64,${img.image}`} alt="lamp" />
          </div>
        ))}
      </div>
    );
  }
};
export default withRouter(ImageLists);
