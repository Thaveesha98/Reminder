import React from "react";
import Examshedule from "./Sections/Examshedule";
import MyTable from "./Sections/Table";

function Page() {
  return (
    <div className="bg-yellow-400">
      <Examshedule />
      <MyTable />
    </div>
  );
}

export default Page;
