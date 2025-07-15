import { enhancedImageAPI } from "../utils/enhancedImageAPI";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import { useState } from "react";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try { const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);   
    } catch (error) {console.log(error);
      alert("Error while enhancing the image. Please try again later."); }
  };
  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </>
  );
};

export default Home;
