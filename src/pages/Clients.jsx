import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";

import "./documentation.css";

const FileUploader = () => {
  const [files, setFiles] = useState(null);
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  // send files to the servers

  const handleUpload = async () => {
    try {
      setUploading(true);
      const formData = new FormData();
      Object.keys(files).forEach((key) => {
        formData.append(key, files[key]);
      });
      const response = await fetch("http://localhost:3000/docs", {
        method: "POST",
        body: formData,
      });
      // Handle server response here
      console.log("Upload successful", response);
      // Reset file state after successful upload
      setFiles(null);
    } catch (error) {
      // Handle error
      console.error("Error uploading files", error);
    } finally {
      setUploading(false);
    }
  };

  if (files)
    return (
      <div className="uploads flex items-center justify-center">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles(null)}>Cancel</button>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    );

  return (
    <>
      <Navbar />

      <div className="container w-6/12 mx-auto mt-40 min-[390px]:w-6/12">
        <h1 className="text-3xl font-bold flex items-center justify-center mb-4">
          Documentation
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="first-container  h-96 rounded-3xl w-full ">
            <div
              className="dropzone pb-10 pt-10 bg-sky-100 bg-opacity-35 hover:bg-opacity-85"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <span className="font-bold mt-8"> Client Data :</span>
              <div className="icon">
                <img src="https://i.imgur.com/nzo8mAO.png" width={85} alt="" />
              </div>
              <h1 className="text-lg mt-5">Drag and Drop Files to Upload</h1>
              <h1>Or</h1>
              <input
                type="file"
                multiple
                onChange={(event) => setFiles(event.target.files)}
                hidden
                accept=".xlsx, .csv"
                ref={inputRef1}
              />
              <button
                className="bg-[#593808] text-white p-2 px-3 text-lg rounded-2xl"
                onClick={() => inputRef1.current.click()}
              >
                Select Files
              </button>
              <span className="text-lg text-gray-600">
                Choose .xlsx, .csv, Excel file
              </span>
            </div>
          </div>

          {/* second container */}

          <div className="second-container h-96 rounded-3xl w-full ">
            <div
              className="dropzone pb-10 pt-10 bg-sky-100 bg-opacity-35 hover:bg-opacity-85"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <span className="font-bold mt-8"> Company Logo :</span>
              <div className="icon">
                <img src="https://i.imgur.com/nzo8mAO.png" width={85} alt="" />
              </div>
              <h1 className="text-lg mt-5">Drag and Drop Files to Upload</h1>
              <h1>Or</h1>
              <input
                type="file"
                multiple
                onChange={(event) => setFiles(event.target.files)}
                hidden
                accept=".jpg, .jpeg, .png, gif"
                ref={inputRef2}
              />
              <button
                className="bg-[#593808] text-white p-2 px-3 text-lg rounded-2xl"
                onClick={() => inputRef2.current.click()}
              >
                Select Files
              </button>
              <span className="text-lg text-gray-600">
                Choose .jpg, .jpeg, .png file
              </span>
            </div>
          </div>

          {/* third Container */}
          <div className="third-container h-96 rounded-3xl w-full ">
            <div
              className="dropzone pb-10 pt-10 bg-sky-100 bg-opacity-35 hover:bg-opacity-85"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <span className="font-bold mt-8"> Box Design :</span>
              <div className="icon">
                <img src="https://i.imgur.com/nzo8mAO.png" width={85} alt="" />
              </div>
              <h1 className="text-lg mt-5">Drag and Drop Files to Upload</h1>
              <h1>Or</h1>
              <input
                type="file"
                multiple
                onChange={(event) => setFiles(event.target.files)}
                hidden
                accept=".jpg, .jpeg, .png"
                ref={inputRef3}
              />
              <button
                className="bg-[#593808] text-white p-2 px-3 text-lg rounded-2xl"
                onClick={() => inputRef3.current.click()}
              >
                Select Files
              </button>
              <span className="text-lg text-gray-600">
                Choose .pdf, .doc file
              </span>
            </div>
          </div>
        </div>

        {/* <button
          onClick={handleUpload}
          className="mt-4 bg-[#593808]  hover:bg-[#595000] text-white font-bold py-2 px-4 rounded"
        >
          Upload Files
        </button> */}
      </div>
    </>
  );
};

export default FileUploader;
