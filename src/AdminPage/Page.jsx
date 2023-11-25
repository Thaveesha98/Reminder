import React from "react";
import Examshedule from "./Sections/Examshedule";
import MyTable from "./Sections/Table";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Page() {
  return (
    <div className="bg-gradient-to-t from-yellow-400 to-yellow-200">
      <Header />
      <Examshedule />
      <MyTable />
      <Footer />
    </div>
  );
}

export default Page;
