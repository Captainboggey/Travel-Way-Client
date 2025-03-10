import React from 'react';

const BookTable = ({book}) => {
      const {firstName,location,email}=book;
    return (
        
            <tr>

                <td>{firstName}</td>
                
                <td>{location}</td>
                <td>{email}</td>
                <button className='btn btn-primary bg-yellow-200 border-none'>Confirm</button>
            </tr>
       
    );
};

export default BookTable;