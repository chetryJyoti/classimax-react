import React, { useState, useEffect } from "react";
import uploadImageToS3 from "../../functions/uploadImg";

const TestImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageLink, setImageLink] = useState("");
  const [selectedImages, setSelectedImages] = useState([]); // New state for selected images
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    console.log("Updated image links:", imageLink);
  }, [imageLink]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Add the selected image to the selectedImages state
    console.log("selected file",selectedFile);
    setSelectedImages((prevSelectedImages) => [...prevSelectedImages, file]);
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevSelectedImages) => {
      const updatedImages = [...prevSelectedImages];
      updatedImages.splice(index, 1);
      setSelectedFile(null)
      return updatedImages;
    });
  };

  const handleUpload = async () => {
    if (selectedImages.length > 0) {
      try {
        for (const image of selectedImages) {
          const imageUrl = await uploadImageToS3(image);
          setImageLink(imageUrl);
          console.log(imageUrl);
        }
        // Clear the selected images after successful upload
        // setSelectedImages([]);
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
      <button onClick={handleUpload}>Upload Images</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {selectedImages.map((image, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              margin: "10px",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src={URL.createObjectURL(image)}
              alt={`Selected ${index}`}
              style={{ width: "300px", height: "auto" }}
            />
            {hoverIndex === index && (
              <button
                onClick={() => handleRemoveImage(index)}
                style={{
                  position: "absolute",
                  top: "100px",
                  left: "100px",
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px",
                  border: "none",
                }}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestImageUpload;
