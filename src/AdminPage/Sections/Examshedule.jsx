import React from "react";
import Input from "../Components/Input";
import axios from "axios";

function handleSubmit(event) {
  event.preventDefault();
  const startTime = event.target.querySelector('[name="startTime"]').value;
  const endTime = event.target.querySelector('[name="endTime"]').value;
  const data = new FormData(event.target);
  data.append("startTime", startTime);
  data.append("endTime", endTime);

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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-[40%] justify-center mx-auto border-2 rounded-md border-black relative">
          <div className="flex justify-center">
            <h1 className="text-black underline pb-[2%] ml-[-5%]">
              Schedule The Examinations{" "}
            </h1>
          </div>
          <div className="flex space-x-10 justify-center pb-[2%] ml-[10%] ">
            <div>
              <Input
                title="Examination Name"
                type="text"
                display="enter exam code"
              />
              <Input
                title="Examination Date"
                type="date"
                display="enter exam date"
              />
              <Input
                title="Supervisor"
                type="text"
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
                <label className="mt-[8%] ml-[-27%] h-[1%] pr-1">To</label>
                <input
                  className="mt-[7.5%] h-[25px]"
                  type="time"
                  name="endTime"
                />
              </div>
              <div className="mt-[-4%]">
                <Input
                  title="Assistant supervisor"
                  type="text"
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
