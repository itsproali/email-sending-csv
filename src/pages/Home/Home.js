import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ReadCSV from "../../components/ReadCSV";
import auth from "../../utils/firebase.config";
import "./Home.css";
import SendEmail from "../../components/SendEmail";
import { EmailContext } from "../../App";

const Home = () => {
  const { emails, dispatch } = useContext(EmailContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [navigate]);

  const handleSetEmails = (data) => {
    setLoading(true);
    dispatch({ type: "SET_EMAILS", payload: data });
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="home">
      {emails.length === 0 ? <h1>Upload a CSV File</h1> : <h1>Send Email</h1>}
      <div className="home_container">
        {emails.length === 0 ? (
          <ReadCSV handleSetEmails={handleSetEmails} />
        ) : (
          <SendEmail />
        )}
      </div>
    </section>
  );
};

export default Home;
