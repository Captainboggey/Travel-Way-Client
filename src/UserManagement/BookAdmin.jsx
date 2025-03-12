import React, { useEffect, useState } from 'react';
import UserManagementNavbar from './UserManagementNavbar';
import { useLoaderData } from 'react-router-dom';
import BookTable from './BookTable';
import axios from 'axios';
import PrivateRoute from '../Routes/PrivateRoute';

const BookAdmin = () => {
    // const [LoadBooking,setLoadBooking] = useState([])
    const [bookings,setBookings]=useState([])
    // console.log(bookings)
    useEffect(()=>{
        axios.get('http://localhost:5000/book',{withCredentials:true})
        .then(res=>setBookings(res.data))
    },[])
    const update = ({status:"confirm"})
      const handleUpdate = (_id)=>{
        axios.patch(`http://localhost:5000/book/${_id}`,update)
        .then(res=>{
            if(res.data.modifiedCount>0){
                const remaining = bookings.filter(booking=> booking._id !== _id)
                const updated = bookings.find(booking=> booking._id === _id);
                updated.status ='confirm'
                const newBooking = [updated,...remaining]
                setBookings(newBooking)
            }
        })
      }
    return (
        <div>
            <UserManagementNavbar></UserManagementNavbar>
            <h2 className="text-4xl text-center font-bold my-10">Bookings List</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {/* row 1 */}
                       {
                        bookings.map(book=><BookTable handleUpdate={handleUpdate} key={book._id} book={book}></BookTable>)
                       }
                     
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default BookAdmin;