import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Mytask() {
  const [lecdata, setLecData] = useState([]);

  useEffect(() => {
    axios
      .get("?")
      .then((response) => {
        setLecData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lecture data:", error);
      });
  }, []);
  return (
    <div className="py-[100px] space-y-5">
      {lecdata.map((Lecture) => (
        <Card
          key={Lecture.id}
          examName={Lecture.examName}
          Venue={Lecture.Venue}
          stime={Lecture.stime}
          etime={Lecture.etime}
          Date={Lecture.Date}
        />
      ))}
    </div>
  );
}

export default Mytask;
