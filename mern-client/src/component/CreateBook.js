import React, { useState } from 'react'
import axios from 'axios';

export default function CreateBook() {
  
  const formFieldSet = {
    width : '300px',
    padding : '10px',
    margin : 'auto',
    borderRadius:'10px'
  }

  const [bookData, setBookData] = useState({
    'book_name':'',
    'book_author':'',
    'book_price':'',
  })

  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setBookData({
      ...bookData,
      [name]:value
    })
  }

  const handleFormSubmit = async(e) => {
     e.preventDefault();
     try{
      const response = await axios.post('http://localhost:5000/api/addbook',bookData);
      console.log(response.data);
      setBookData({
        'book_name':'',
        'book_author':'',
        'book_price':'',
      });
     }catch(error){
      console.error(error)
     }
  }

  return (
    <div>
      <fieldset style={formFieldSet}>
        <legend>Add Book</legend>
          <tr>
            <td>Book Name</td>
            <td>
              <input type='text' name='book_name' value={bookData.book_name} onChange={handleInputChange}/>
            </td>
          </tr>
          <tr>
            <td>Book Author</td>
            <td>
              <input type='text' name='book_author' value={bookData.book_author} onChange={handleInputChange}/>
            </td>
          </tr>
          <tr>
            <td>Book price</td>
            <td>
              <input type='text' name='book_price' value={bookData.book_price} onChange={handleInputChange}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2} align='center'>
              <input type='button' value={'Add Book'} name='AddBook' onClick={handleFormSubmit}/>
            </td>
          </tr>
      </fieldset>
    </div>
  )
}