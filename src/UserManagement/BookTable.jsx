import axios from 'axios';
import React, { useState } from 'react';

const BookTable = ({book,handleUpdate}) => {
      const {firstName,location,email,_id,status}=book;
      
      console.log(book)
      
    return (
        
            <tr>

                <td>{firstName}</td>
                
                <td>{location}</td>
                <td>{email}</td>
                {
                    status==='confirm'?<button  className='btn btn-primary bg-green-600 border-none'>Confirmed</button>:<button  onClick={()=> handleUpdate(_id)} className='btn btn-primary bg-yellow-200 border-none'>Please Confirm</button>
                }
              
            </tr>
       
    );
};

export default BookTable;