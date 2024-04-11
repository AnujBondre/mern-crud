import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AllBooks() {
    const [bookData,setBookData] = useState([]);

    useEffect(() => {
       getbook();
    },[])

  const getbook = async()=>{
      axios.get('http://localhost:5000/api/viewbook').then((response)=>{
        setBookData(response.data);
      }).then((error)=>{
        console.log("error:",error);
      })
  }

  const deletebook = async(id)=>{
    axios.delete(`http://localhost:5000/api/deletebook/${id}`)
    getbook();
  }

    return (
    <div>
      <h1>All Books</h1>
    <table border={2} width={'600px'}>
      <tr>
        <th>Book Name</th>
        <th>Book Author</th>
        <th>Book Price</th>
        <th colSpan={2}>Action</th>
      </tr>

      {
          bookData.map((Book)=>(
              <tr>
                <td>{Book.book_name}</td>
                <td>{Book.book_author}</td>
                <td>{Book.book_price}</td>
                <td>
                <a href={`updatebook/${Book._id}`}>Edit</a>
                </td>
                <td>
                  <a href='#' onClick={()=>deletebook(Book._id)}>Delete</a>
                </td>
            </tr>
        ))
      }  
    </table>
    </div>
  )
}
