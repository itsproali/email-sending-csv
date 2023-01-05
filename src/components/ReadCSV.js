import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useCSVReader } from "react-papaparse";
import csv_img from "../assets/csv.png";

const ReadCSV = ({ handleSetEmails }) => {
  const { CSVReader } = useCSVReader();
  const [tempEmails, setTempEmails] = useState([]);

  return (
    <>
      <CSVReader
        onUploadAccepted={(results) => {
          setTempEmails(results.data);
        }}
      >
        {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
          <>
            <div className="upload">
              {!acceptedFile ? (
                <button
                  type="button"
                  {...getRootProps()}
                  className="upload_btn"
                >
                  Browse file
                </button>
              ) : (
                <>
                  <div className="selected_file">
                    <img src={csv_img} alt="csv" />
                    <span>{acceptedFile.name.slice(0, 9)}..</span>
                    <button {...getRemoveFileProps()} className="remove_btn">
                      <CloseIcon className="remove_icon" />
                    </button>
                    <ProgressBar />
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => handleSetEmails(tempEmails)}
                  >
                    Import
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </CSVReader>
    </>
  );
};

export default ReadCSV;
