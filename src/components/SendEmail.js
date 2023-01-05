import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const SendEmail = ({ emails }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "email", headerName: "Email", width: 400 },
    { field: "action", headerName: "Action", width: 150 },
  ];

  return (
    <div style={{ height: "100%", width: "90%" }}>
      <DataGrid
        rows={emails}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
};

export default SendEmail;
