import React, { useState } from "react";

const PhotoUploadForm = ({setBody_photo}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState("");
  const handleChange = async (e) => {
    const files = e.target.files[0];
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "facebookimagedb");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/raviimagedb/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
    setImageUrl(file.secure_url);
    setBody_photo(file.secure_url);
    setLoading(false);
  };
  const handleUpload = () => {};
  return (
    <div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
      />
      <button onClick={handleUpload}>upload</button>
      {loading ? "loading.." : <img width="300px" src={imageUrl} alt="" />}
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
