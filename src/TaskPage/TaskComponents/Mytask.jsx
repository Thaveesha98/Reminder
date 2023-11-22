import React from "react";
import Card from "./Card";
import Lecture from "./Data";

function createEntry(Lecture) {
  return (
    <Card
      key={Lecture.id}
      examName={Lecture.examName}
      Venue={Lecture.Venue}
      Time={Lecture.Time}
      Date={Lecture.Date}
    />
  );
}

function Mytask() {
  return <div className="py-[100px] space-y-5">{Lecture.map(createEntry)}</div>;
}

export default Mytask;
