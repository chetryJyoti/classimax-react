import React, { useState, useEffect } from "react";
import uploadImageToS3 from "../../functions/uploadImg";

const TestImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageLinks, setImageLinks] = useState([]);

  useEffect(() => {
    console.log("Updated image links:", imageLinks);
  }, [imageLinks]);
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const imageUrl = await uploadImageToS3(selectedFile);
        setImageLinks((prevImageLinks) => [...prevImageLinks, imageUrl]);
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    } else {
      console.error("Please select an image file.");
    }
  };

  return (
    <div>
      <h2>Test Image Upload to AWS S3</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {imageLinks.length > 0 && (
        <div>
          <h3>Uploaded Images:</h3>
          {imageLinks.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Uploaded ${index + 1}`}
              style={{ width: "300px", height: "auto", margin: "10px" }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestImageUpload;
