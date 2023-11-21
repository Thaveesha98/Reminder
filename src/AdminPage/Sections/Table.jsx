import React, { useState, useEffect } from "react";
import axios from "axios";

function MyTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (deleteID) => {
    axios
      .delete(`/api/data/${deleteID}`) // Assuming your delete endpoint is /api/data/:id
      .then((res) => {
        console.log("DELETED RECORD:", res);
        // Refresh the data after deletion
        axios
          .get("/api/data")
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (editID) => {
    // Implement your logic for editing the data
    console.log("Edit button clicked for ID:", editID);
  };

  return (
    <div className="w-[60%] mx-auto justify-center">
      <table className="flex justify-center border-spacing-5">
        <thead>
          <div className="bg-pink-400 ">
            <tr>
              <div className="flex justify-between mx-auto">
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Exam Code</th>
                <th className="px-4 py-2">Supervisor</th>
                <th className="px-4 py-2">Assistant Supervisor</th>
                <th className="px-4 py-2">Venue</th>
                <th className="px-4 py-2">Actions</th>
              </div>
            </tr>
          </div>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-2">{row.Time}</td>
              <td className="px-4 py-2">{row.Date}</td>
              <td className="px-4 py-2">{row.Exam}</td>
              <td className="px-4 py-2">{row.Supervisor}</td>
              <td className="px-4 py-2">{row.Asistant}</td>
              <td className="px-4 py-2">{row.Venue}</td>
              <td className="px-4 py-2">
                <button
                  className="btn btn-warning text-black"
                  onClick={() => handleEdit(row.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger text-black"
                  onClick={() => handleDelete(row.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
