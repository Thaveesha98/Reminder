// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function MyTable() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/data")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleDelete = (deleteID) => {
//     axios
//       .delete(`/api/data/${deleteID}`) // Assuming your delete endpoint is /api/data/:id
//       .then((res) => {
//         console.log("DELETED RECORD:", res);
//         // Refresh the data after deletion
//         axios
//           .get("/api/data")
//           .then((response) => {
//             setData(response.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleEdit = (editID) => {
//     // Implement your logic for editing the data
//     console.log("Edit button clicked for ID:", editID);
//   };

//   return (
//     <div className="w-[60%] mx-auto justify-center ">
//       <table className="flex justify-center border-spacing-5 p-[10%]">
//         <thead>
//           <div className="bg-pink-400 rounded-md">
//             <tr>
//               <div className="flex justify-between mx-auto">
//                 <th className="px-4 py-2">Time</th>
//                 <th className="px-4 py-2">Date</th>
//                 <th className="px-4 py-2">Exam Code</th>
//                 <th className="px-4 py-2">Supervisor</th>
//                 <th className="px-4 py-2">Assistant Supervisor</th>
//                 <th className="px-4 py-2">Venue</th>
//                 <th className="px-4 py-2">Actions</th>
//               </div>
//             </tr>
//           </div>
//         </thead>
//         <tbody>
//           {data.map((row) => (
//             <tr key={row.id}>
//               <td className="px-4 py-2">{row.Time}</td>
//               <td className="px-4 py-2">{row.Date}</td>
//               <td className="px-4 py-2">{row.Exam}</td>
//               <td className="px-4 py-2">{row.Supervisor}</td>
//               <td className="px-4 py-2">{row.Asistant}</td>
//               <td className="px-4 py-2">{row.Venue}</td>
//               <td className="px-4 py-2">
//                 <button
//                   className="btn btn-warning text-black"
//                   onClick={() => handleEdit(row.id)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger text-black"
//                   onClick={() => handleDelete(row.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MyTable;
import React, { useState, useEffect } from "react";
import axios from "axios";

const ExamList = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/exam_reminder/exam/getAllExam")
      .then((response) => {
        setExams(response.data);
      })
      .catch((error) => {
        console.error("Error fetching exams:", error);
      });
  }, []);

  const handleDelete = (examId) => {
    // axios
    //   .delete(
    //     http://localhost:8080/api/exam_reminder/exam/deleteExam/${examId}
    //   )
    //   .then((response) => {
    //     setExams(exams.filter((exam) => exam.examId !== examId));
    //   })
    //   .catch((error) => {
    //     console.error("Error deleting exam:", error);
    //   });
  };

  const handleEdit = (examId) => {
    // Implement your edit functionality here
  };

  return (
    <div className="container mx-auto mt-8 ">
      <h2 className="mb-4 text-2xl font-bold">Exam List</h2>
      <table className="min-w-full bg-pink-300 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Exam Name</th>
            <th className="px-4 py-2 border-b">Date</th>
            <th className="px-4 py-2 border-b">Start Time</th>
            <th className="px-4 py-2 border-b">End Time</th>
            <th className="px-4 py-2 border-b">Venue</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.examId}>
              <td className="px-4 py-2 border-b">
                {exam.course ? exam.course.coursename : "N/A"}
              </td>
              <td className="px-4 py-2 border-b">{exam.date}</td>
              <td className="px-4 py-2 border-b">{exam.stime}</td>
              <td className="px-4 py-2 border-b">{exam.etime}</td>
              <td className="px-4 py-2 border-b">{exam.venue}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => handleEdit(exam.examId)}
                  className="px-2 py-1 mr-2 text-white bg-blue-500 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(exam.examId)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
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
};

export default ExamList;
