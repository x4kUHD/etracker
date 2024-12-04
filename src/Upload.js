import React, { useRef, useState, ChangeEvent } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  }

  async function handleFileUpload() {
    if (!file) {
      alert("Please Select a CSV file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("failed to upload file");
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && <button onClick={handleFileUpload}>Upload</button>}
    </div>
  );
};

export default Upload;
