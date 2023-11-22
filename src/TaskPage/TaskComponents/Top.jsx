import React, { useState } from "react";
import Calendar from "react-calendar";
import { isToday } from "date-fns";

function Top() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log("Selected date:", date);
    setSelectedDate(date);
  };

  const isDateToday = (date) => {
    return isToday(date);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      return isDateToday(date) ? "bg-blue-500 text-white rounded-full" : "";
    }
    return "";
  };

  return (
    <div className="flex relative   z-50 ">
      <div className="w-[80%] flex justify-center mx-auto space-x-10">
        <div className="w-[50%]">
          <h1 className=" text-black text-4xl font-normal font-Lato">
            This Page gives you to your Examination duty
          </h1>
          <p className=" text-black text-lg font-normal font-Lato">
            You can request to change the time slot or suggest other lecturer to
            participate in the examination.
          </p>
          <p className=" text-black text-lg font-normal font-Lato">
            Also, you can keep a to-do list on this website.
          </p>
        </div>
        <div className="bg-white rounded-lg h-[250px] w-[400px]">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={tileClassName}
          />
        </div>
      </div>
    </div>
  );
}

export default Top;
