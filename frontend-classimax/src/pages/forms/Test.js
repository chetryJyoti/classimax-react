import React, { useState } from "react";
import uploadImageToS3 from "../../functions/uploadImg";

const TestImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageLink, setImageLink] = useState("");


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const imageUrl = await uploadImageToS3(selectedFile);
        setImageLink(imageUrl);
        console.log(imageUrl);
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
      {imageLink && <img src={imageLink} alt="Uploaded" style={{ width: "300px", height: "auto" }} />}
    </div>
  );
};

export default TestImageUpload;
