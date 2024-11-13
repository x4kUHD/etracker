import React, { useRef, useState } from "react";
import axios from "axios";

const Upload = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [key, setKey] = useState(Date.now());

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("File uploaded successfully!");
      console.log(response.data);

      setFile(null);
      setKey(Date.now());
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };

  return (
    <form>
      <input
        key={key}
        style={{ display: "none" }}
        type="file"
        accept=".csv"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <button
        className="text-white rounded-xl border-2 px-4 py-2 border-white"
        onClick={file ? handleUpload : handleButtonClick}
      >
        Upload
      </button>
      {/* {file ? "Upload" : "Choose File"} */}
    </form>
  );
};

export default Upload;
