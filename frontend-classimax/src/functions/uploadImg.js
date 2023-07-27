import AWS from "aws-sdk";

AWS.config.update({
  region: "ap-south-1",
  accessKeyId: "AKIA2ADTTCSO66RZMUNS",
  secretAccessKey:"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",
});
const uploadImageToS3 = async (file) => {
    const s3 = new AWS.S3();
    const bucketName = "classimax-products-images";
    const uniqueId = Date.now(); // Generate a unique ID using the current timestamp
    const fileName = `${uniqueId}.PNG`; // Append the unique ID to the file name with the desired extension
  
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
  
export default uploadImageToS3