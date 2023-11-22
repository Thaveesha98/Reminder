import React from "react";
import Input from "../Components/Input";
import axios from "axios";

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  axios
    .post("https://example.com/api/endpoint", data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function Examshedule() {
  return (
    <div className="relative  ">
      <form onSubmit={handleSubmit}>
        <div className="w-[40%] justify-center mx-auto border-2 rounded-md border-black relative">
          <div className="flex justify-center">
            <h1 className="text-black underline pb-[2%] ml-[-5%]">
              Schedule The Examinations{" "}
            </h1>
          </div>
          <div className="flex space-x-10 justify-center pb-[2%] ml-[35%] ">
            <div>
              <Input
                title="Examination Name"
                type="text"
                name="Examination Name"
                display="enter exam code"
              />
              <Input
                title="Examination Date"
                type="date"
                name="Examination Date"
                display="enter exam date"
              />
              <Input
                title="Supervisor"
                type="text"
                name="Supervisor"
                display="enter supervisor name"
              />
            </div>
            <div>
              <Input title="Venue" type="text" display="enter venue" />
              <div className="flex mt-[-4%]">
                <Input
                  title="Examination time"
                  type="time"
                  display="enter exam start time"
                  name="startTime"
                />
                <label className="mt-[6%] ml-[-21%] h-[1%] pr-1">To</label>
                <div className="mt-[5.7%]">
                  <Input
                    type="time"
                    name="endTime" // Add name attribute for endTime input
                  />
                </div>
              </div>
              <div className="mt-[-6%]">
                <Input
                  title="Assistant supervisor"
                  type="text"
                  name="Assistant supervisor"
                  display="enter Assistant supervisor name"
                />
              </div>
            </div>
          </div>
          <button className="absolute bottom-0 right-2" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Examshedule;
