import React, { useRef } from "react";
import { Button } from "@mui/material";
import { FcStackOfPhotos } from "react-icons/fc";
const PhotoUploadForm = ({setBody_photo}) => {
  // const [imageUrl, setImageUrl] = useState("");
  // const [loading, setLoading] = useState("");

  const inputRef = useRef()
  const handleChange = async (e) => {
    const files = e.target.files[0];
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "facebookimagedb");
    // setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/raviimagedb/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
    // setImageUrl(file.secure_url);
    setBody_photo(file.secure_url);
    // setLoading(false);
  };
  const handleUpload = () => {
    inputRef.current.click()
  };
  return (
    <div>
      <input
        style={{display:'none'}}
        type="file"
        ref={inputRef}
        // accept="image/png, image/jpeg; capture=camera"
        accept="image/*; capture=camera"
        onChange={handleChange}
      />
      <Button onClick={handleUpload} title='Add Photo' ><FcStackOfPhotos size='3rem'/></Button>
      {/* {loading ? "loading.." : <img width="300px" src={imageUrl} alt="" />} */}
    </div>
  );
};

export default PhotoUploadForm;








// import React, { useState } from "react";

// const PhotoUploadForm = () => {
//   const [imageUrl, setImageUrl] = useState("");
//   const [loading, setLoading] = useState("");
//   const handleChange = async (e) => {
//     const files = e.target.files[0];
//     const data = new FormData();
//     data.append("file", files);
//     data.append("upload_preset", "facebookimagedb");
//     setLoading(true);
//     const res = await fetch(
//       "https://api.cloudinary.com/v1_1/raviimagedb/image/upload",
//       { method: "POST", body: data }
//     );
//     const file = await res.json();
//     setImageUrl(file.secure_url);
//     setLoading(false);
//   };
//   const handleUpload = () => {};
//   return (
//     <div>
//       <input
//         type="file"
//         accept="image/png, image/jpeg"
//         onChange={handleChange}
//       />
//       <button onClick={handleUpload}>upload</button>
//       {loading ? "loading.." : <img src={imageUrl} alt="" />}
//     </div>
//   );
// };

// export default PhotoUploadForm;
