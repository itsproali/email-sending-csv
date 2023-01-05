import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ReadCSV from "../../components/ReadCSV";
import auth from "../../utils/firebase.config";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [emails, setEmails] = useState([]);

  console.log(emails);

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

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="home">
      <h1>Upload a CSV File</h1>
      <div className="home_container">
        <ReadCSV setEmails={setEmails} />
      </div>
    </section>
  );
};

export default Home;
