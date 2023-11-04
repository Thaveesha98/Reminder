import React,{useEffect,useState} from 'react'
import axios from 'axios';


const Table = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts') // Replace with your actual API endpoint
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); // Empty dependency array means this effect runs once when the component mounts
    
    const handleDelete = (id) => {
      // Delete the row with the given id from the backend
    };

    if (posts.length === 0) {
      return <p>No data available.</p>;
    }
  
    return (
      <div className='border border-solid border-black justify-center w-[60%] ml-[20%] items-center'>
        <table className='ml-[18%]'>
        <thead className='space-x-5 '>
          <tr >
            <th>Time</th>
            <th>Date</th>
            <th>Exam Code</th>
            <th>Supervisor</th>
            <th>Assistant Supervisor</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
              <tr key={post.value}>
                <td>{post.startTime}</td>
                <td>{post.endTime}</td>
                <td>{post.date}</td>
                <td>{post.selectedName}</td>
                <td>{post.selectedSupervisor}</td>
                <td>{post.selectedAsupervisor}</td>
                <td>{post.selectedVenue}</td>
                {/* <td>
                  <button onClick={() => handleDelete(posts.id)}>Delete</button>
               </td> */}
                
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    );
  };
  export default Table