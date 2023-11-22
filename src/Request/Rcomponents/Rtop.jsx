import React, { useState } from "react";
import Input from "../../AdminPage/Components/Input";
import axios from "axios";

function Rtop() {
  const [formData, setFormData] = useState({
    examName: "",
    examDate: "",
    suggestLecturer: false,
    lecturerName: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an Axios POST request to your backend endpoint
      const response = await axios.post("YOUR_BACKEND_ENDPOINT", formData);

      // Handle the response as needed
      console.log("Response from the server:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error sending request:", error);
    }
  };

  return (
    <div className="w-full pb-10 ">
      <div className="w-[60%] mx-auto justify-center">
        <h1 className="text-black text-[30px] font-normal font-Lato ">
          If you have an emergency, you can request a change of duty and suggest
          a lecturer for the examination duty.
        </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="w-[960px] h-[500px] bg-zinc-300 rounded-[153px] mt-10  ">
              <h1 className="text-black text-[30px] font-normal font-Lato w-[80%] flex justify-center mx-auto py-5">
                Request for the change and suggest lecturer
              </h1>
              <div className="flex w-[80%] mt-[10px] mx-auto justify-center space-x-[20%]">
                <div>
                  <p className="text-black text-[20px]  font-normal font-Lato">
                    <Input
                      title="Examination Name"
                      type="text"
                      name="examName"
                      display="enter exam code"
                      onChange={handleChange}
                    />
                  </p>
                </div>
                <p className="text-black text-[20px] font-normal font-Lato">
                  <Input
                    title="Examination Date"
                    type="date"
                    name="examDate"
                    display="enter Date"
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className="ml-[21%] mt-[1%]">
                <p className="text-black text-[23px] font-normal font-Lato">
                  Can Suggest a lecturer ?
                </p>
                <div className="flex space-x-5 w-[20%] ">
                  <div>
                    <input
                      type="checkbox"
                      name="suggestLecturer"
                      value={formData.suggestLecturer}
                      onChange={handleChange}
                    />
                    <label>Yes</label>
                  </div>
                </div>
              </div>
              <p className="text-black text-[20px] font-normal font-Lato mt-[2%] ml-[21%]">
                *Click here to notify the selected lecturer
              </p>
              {formData.suggestLecturer && (
                <div className="ml-[21%] ">
                  <input
                    className="  mt-[1%] w-[500px] h-[50px] bg-white border border-black"
                    type="text"
                    name="lecturerName"
                    placeholder="Suggest lecturer name"
                    onChange={handleChange}
                  />
                </div>
              )}
              <button className="text-black flex justify-center mx-auto mt-[5%]  text-[31px] font-normal font-Lato">
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Rtop;
