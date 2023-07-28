import AWS from "aws-sdk";

AWS.config.update({
  region: "ap-south-1",
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
});
const uploadImageToS3 = async (file) => {
  const s3 = new AWS.S3();
  const bucketName = "classimax-products-images";
  const uniqueId = Date.now();
  const fileName = `${uniqueId}.PNG`;

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: file,
    ACL: "public-read",
  };

  try {
    const data = await s3.upload(params).promise();
    return data.Location;
  } catch (error) {
    console.error("Failed to upload image:", error);
    throw error;
  }
};

export default uploadImageToS3;
