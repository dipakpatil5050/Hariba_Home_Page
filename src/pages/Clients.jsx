import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
// import { PlusSquareOutlined } from "@ant-design/icons";
import { FaFileUpload } from "react-icons/fa";
import { FolderPlus } from "lucide-react";

const FileUploader = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const handleFile1Change = (e) => {
    const file = e.target.files[0];
    setFile1(file);
  };

  const handleFile2Change = (e) => {
    const file = e.target.files[0];
    setFile2(file);
  };

  const handleFile3Change = (e) => {
    const file = e.target.files[0];
    setFile3(file);
  };

  const handleUpload = async () => {
    try {
      // Check if File System Access API is available
      if ("showSaveFilePicker" in window) {
        // Request file system access from the user
        const handle = await window.showSaveFilePicker();

        // Write each file to the file system
        if (file1) {
          await writeFileToFS(handle, file1);
        }
        if (file2) {
          await writeFileToFS(handle, file2);
        }
        if (file3) {
          await writeFileToFS(handle, file3);
        }

        // Optional: Display success message
        alert("Files saved successfully!");
      } else {
        alert("File System Access API is not supported in this browser.");
      }
    } catch (error) {
      console.error("Error saving file:", error);
      alert("Error saving file. Please try again.");
    }
  };

  const writeFileToFS = async (handle, file) => {
    // Create a writable stream from the file handle
    const writableStream = await handle.createWritable();
    // Write the file contents to the writable stream
    await writableStream.write(file);
    // Close the writable stream
    await writableStream.close();
  };

  return (
    <>
      <Navbar />
      <div className="container w-6/12 mx-auto mt-40 min-[390px]:w-6/12">
        <h1 className="text-3xl font-bold flex items-center justify-center mb-4">
          Documentation
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="first-container bg-gray-200 rounded-3xl p-5 h-80 w-full border">
            <h4>
              Client Data :
              <div className="file-icon flex items-center">
                <label className="cursor-pointer mr-2">
                  <FolderPlus size={60} />
                  <span className="text-lg text-gray-600">
                    Choose .xlsx, .csv, Excel file
                  </span>

                  <input
                    type="file"
                    accept=".xlsx"
                    onChange={handleFile1Change}
                    className="mt-20"
                  />
                </label>
              </div>
            </h4>
          </div>

          <div className="second-container p-5 h-80 rounded-3xl w-full border">
            <h4>
              Company Logo :
              <div className="file-icon flex items-center">
                <label className="cursor-pointer mr-2">
                  <FolderPlus size={60} />
                  <span className="text-lg text-gray-600">
                    Choose .jpg, .jpeg, .png file
                  </span>
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleFile2Change}
                    className="mt-20"
                  />
                </label>
              </div>
            </h4>
          </div>
          <div className="third-container bg-gray-200 rounded-3xl p-5 h-80 w-full border">
            <h4>
              Client Data :
              <div className="file-icon flex items-center">
                <label className="cursor-pointer mr-2">
                  <FolderPlus size={60} />
                  <span className="text-lg text-gray-600">
                    Choose .pdf, .doc file
                  </span>

                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFile3Change}
                    className="mt-20"
                  />
                </label>
              </div>
            </h4>
          </div>
        </div>

        <button
          onClick={handleUpload}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload Files
        </button>
      </div>
      {/* <Steps
        items={[
          {
            title: "Login",
            status: "finish",
            icon: <UserOutlined />,
          },
          {
            title: "Verification",
            status: "finish",
            icon: <SolutionOutlined />,
          },
          {
            title: "Pay",
            status: "process",
            icon: <LoadingOutlined />,
          },
          {
            title: "Done",
            status: "wait",
            icon: <SmileOutlined />,
          },
        ]}
      /> */}
      );
    </>
  );
};

export default FileUploader;
