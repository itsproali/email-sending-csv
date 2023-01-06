import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useState } from "react";
import { EmailContext } from "../App";
import Loading from "./Loading";

const SendEmail = () => {
  const { emails, dispatch } = useContext(EmailContext);
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async (email) => {
    setLoading(true);
    dispatch({ type: "SENT_EMAIL", payload: email });
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <TableContainer component={Paper} sx={{ width: { sm: "80%" } }}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {emails.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{item.id}</TableCell>
              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleSendEmail(item.email)}
                  disabled={item.sent}
                >
                  Send Email
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SendEmail;
