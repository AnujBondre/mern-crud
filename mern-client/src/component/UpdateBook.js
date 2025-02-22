import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function UpdateBook() {
    const {bid} = useParams();
    const navigate = useNavigate();

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

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/viewbook/${bid}`)
        .then(response=>{
            setBookData({
                ...bookData,
                'book_name':response.data.book_name,
                'book_author':response.data.book_author,
                'book_price':response.data.book_price,
            })
        }).then(error=>{
            console.log('Error:',error)
        })
    },[])

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        try{
         const response = await axios.put(`http://localhost:5000/api/updatebook/${bid}`,bookData);
         console.log(response.data);
         setBookData({
           'book_name':'',
           'book_author':'',
           'book_price':'',
         });
         navigate('/books');
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
              <input type='button' value={'Update Book'} name='UpdateBook' onClick={handleFormSubmit} />
            </td>
          </tr>
      </fieldset>
    </div>
  )
}
