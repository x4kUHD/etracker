import axios from "axios";
import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file.");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/upload/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response.data); // Log the response
      alert(response.data.message); // Show success message
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.error || "File upload failed!");
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
