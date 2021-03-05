import db from "db";
import { useEffect, useState } from "react";

const Scores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    db.collection("scores")
      .get()
      .then((querySnapshot) => {
        setScores(() => querySnapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return <p>Scores Page</p>;
};

export default Scores;
