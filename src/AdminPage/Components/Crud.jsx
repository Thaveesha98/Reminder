import React, { useState, useEffect } from "react";
import axios from 'axios'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CRUD = () => {
    const [formData, setFormData] = useState({
        userId: "",
        id: "",
        title: "",
        body: "",
    });
    
    const [editID, setEditID] = useState()

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0)

    const { userId, id, title, body } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userId && id && title && body) {
            axios.post('https://jsonplaceholder.typicode.com/posts', formData)
                .then(res => {
                    setData([...data, res.data]);
                    setFormData({ userId: "", id: "", title: "", body: "" });

                })
                .catch(err => console.log(err))

        }
    };
     //api
     const [post, setPost] = useState({
        selectedName:"",
        date: '',
        selectedSupervisor: '',
        selectedVenue: '',
        selectedAsupervisor: '',
        startTime: '',
        endTime: '',
      });
     const handleInput=(event)=>{
      setPost({...post,[event.target.value]:event.target.event})
     }
     
      //ExamName
      const examNames = [
        'AS400',
        'AS410',
        'AS464',
        'AS471',
        'Other Exam 1',
        'Other Exam 2',
        'Other Exam 3',
        // Add more exam names as needed
      ];
        const [selectedName, setSelectedName] = useState('');
        const [searchTerm, setSearchTerm] = useState('');
       
        const handleNameChange = (event) => {
          setSelectedName(event.target.value);
        };
      
        const handleSearch = (event) => {
          setSearchTerm(event.target.value);
        };
      
        const filteredExamNames = examNames.filter((name) =>
          name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        //Date picker
        const [date,setDate] = useState()
      
        const handleDateChange = (date) => {
          setDate(date);
        };
        //Supervisor
        const [selectedSupervisor, setSelectedSupervisor] = useState();
    
      const handleSupervisorChange = (event) => {
        setSelectedSupervisor(event.target.value);
      };
      //venue section
      const venues = [
        'PU',
        'CU',
        'GEO',
        'SET',
        'Other Venue 1',
        'Other Venue 2',
        'Other Venue 3',
        // Add more venue names as needed
      ];
    
      const [selectedVenue, setSelectedVenue] = useState('');
      const [searchvenue, setSearchvenue] = useState('');
    
      const handleVenueChange = (event) => {
        setSelectedVenue(event.target.value);
      };
    
      const handleSearchvenue = (event) => {
        setSearchvenue(event.target.value);
      };
    
      const filteredVenues = venues.filter((venue) =>
        venue.toLowerCase().includes(searchvenue.toLowerCase()));
  
       //Time picker
       const [startTime, setStartTime] = useState('09:00'); // Initial start time
       const [endTime, setEndTime] = useState('17:00'); // Initial end time
     
       const handleStartTimeChange = (event) => {
         setStartTime(event.target.value);
       };
     
       const handleEndTimeChange = (event) => {
         setEndTime(event.target.value);
       }; 
  
       //AssistantSupervisor
       const [selectedAsupervisor, setSelectedAsupervisor] = useState();
    
      const handleAsupervisorChange = (event) => {
        setSelectedAsupervisor(event.target.value);
      };

    const handleUpdate = () => {
        if (userId && id && title && body) {
            axios.put(`https://jsonplaceholder.typicode.com/posts/${editID}`, formData)
                .then(res => {
                    setFormData({ userId: "", id: "", title: "", body: "" });
                    setRefresh(refresh + 1)
                })
                .catch(err => console.log(err))

        }
    };

    const handleDelete = (deleteID) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${deleteID}`)
        .then(res => {
           console.log('DELETD RECORD::::', res)

        })
        .catch(err => console.log(err))
    };

    const handleEdit = (editIDNotState) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${editIDNotState}`)
            .then(res => {
                setFormData(res.data)

            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
        // console.log(data);
    }, [refresh]);

    return (
                    
      <div className=' w-full  p-[5%] justify-center ml-[18%] bg-yellow-400'>
      
        <div>
        <h1 className='text-black text-xl ml-[12%] p-5'>Shedule the examination</h1>
        <form onSubmit={handleSubmit}>
        <div className='flex'>
        {/* ExamName */}
         
      
            <div > 
                <div className="ml-0 ">
                <h1 className="text-black">Examination Name</h1>
                      <input
                        type="text"
                        className="w-[80%] h-[10%] border rounded-md p-2"
                        placeholder="Search for an exam"
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                      <select
                        className="w-[80%] h-[70%] border rounded-md mt-2"
                        id="dropdown"
                        value={selectedName}
                        onChange={handleNameChange}
                      >
                        {filteredExamNames.map((name,key) => (
                          <option key={key} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                 </div>
      {/* Examination Date */}
                  <div className='z-10'>
                        <h1 className='text-black '>Examination Date</h1>
                        <ReactDatePicker
                          selected={date}
                          onChange={handleDateChange}
                          dateFormat="yyyy-MM-dd" // Customize the date format
                          isClearable
                        />
                        <p>Selected Date: {date ? date.toDateString() : 'No date selected'}</p>
                  </div>
      {/* Supervisor */}                
                  <div>
                    <h1 className='text-black'>Supervisor</h1>
                    <select id="dropdown" value={selectedSupervisor} onChange={handleSupervisorChange}>
                         <option value="Option 1">Dr.Sathya</option>
                         <option value="Option 2">Dr.Buddika</option>
                         <option value="Option 3">Dr.Hakeem</option>
                         <option value="Option 4">Dr. kalinga</option>
                    </select>
                  </div>
                </div>
           


      {/* Venue */}
      
        <div>
            <h1 className='text-black'>Venue</h1>
           <input
               type="text"
               className="w-[80%] h-[10%] border rounded-md p-2"
               placeholder="Search for a venue"
               value={searchvenue}
              onChange={handleSearchvenue}
            />
            <select
                className="w-[80%]  border rounded-md mt-2"
                id="dropdown"
                value={selectedVenue}
                onChange={handleVenueChange}
            >
             {filteredVenues.map((venue, index) => (
              <option key={index} value={venue}>
              {venue}
              </option>
             ))}
            </select>
      {/* Examination Time */}
      <div>
      <h1 className='text-black'>Examination Time</h1>
      <div className='flex '>
      <div className='ml-0'>
        
        <input
          type="time"
          id="startTime"
          value={startTime}
          onChange={handleStartTimeChange}
        />
      </div>
      <div>
        <label htmlFor="endTime">TO</label>
        <input
          type="time"
          id="endTime"
          value={endTime}
          onChange={handleEndTimeChange}
        />
        </div>
      </div>
      <p>Selected Time Range: {startTime} - {endTime}</p>
      </div>
      {/* Asistant Supervisors */}
                     <div>
                       <h1 className='text-black'>Asistant Supervisors</h1>
                        <select id="dropdown4" value={selectedAsupervisor} onChange={handleAsupervisorChange}>
                          <option value="Option 1">Dr.Sathya</option>
                          <option value="Option 2">Dr.Buddika</option>
                          <option value="Option 3">Dr.Hakeem</option>
                           <option value="Option 4">Dr. kalinga</option>
                        </select>

                       </div>
                       <div className="flex">
                       <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <button type="submit" className="btn btn-primary" onClick={() => {
                            handleUpdate()
                        }}>
                            Update
                        </button>
                        </div>
                        </div>
                        </div>
                    </ form>
                    </div>
      <div>
                    <hr />

                    <table className="min-w-full w-[60%] divide-y divide-gray-200">
                        <thead>
                            <tr class="table-auto">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam Code</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supervisor</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asistant Supervisor</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-yellow-400 divide-y divide-white">
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.userId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap"> {item.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.body}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.userId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap"> {item.id}</td>
                                    <td>
                                        <button className="btn btn-warning text-black" onClick={() => {
                                            handleEdit(item.id)
                                            setEditID(item.id)
                                        }}>
                                            Edit
                                        </button>{" "}
                                        <button className="btn btn-danger text-black" onClick={() => handleDelete(item.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>))}
                        </tbody>
                    </table>
                    </div>
            
            </div >
    );
};

export default CRUD;