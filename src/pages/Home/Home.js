import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ReadCSV from "../../components/ReadCSV";
import auth from "../../utils/firebase.config";
import "./Home.css";
import SendEmail from "../../components/SendEmail";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [emails, setEmails] = useState([]);

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
    data.splice(0, 1);
    let arr = [];
    let index = 1;
    for (const item of data) {
      const newItem = { id: index, email: item[0] };
      arr.push(newItem);
      index++;
    }
    setEmails(arr);
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
          <SendEmail emails={emails} />
        )}
      </div>
    </section>
  );
};

export default Home;
