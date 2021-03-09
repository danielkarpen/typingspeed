import db from "db";
import { useEffect, useState } from "react";
import Row from "./Row";

function renderRows(scores) {
  return scores.map(({ initials, WPM }, index) => (
    <Row initials={initials} score={WPM} key={index} />
  ));
}

const Scores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    db.collection("scores")
      .get()
      .then((querySnapshot) => {
        setScores(() => querySnapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <>
      <tbody>{renderRows(scores)}</tbody>
    </>
  );
};

export default Scores;
