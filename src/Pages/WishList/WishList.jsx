import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import WishListRow from './WishListRow';

const WishList = () => {
    const [books, setBooks] = useState([]);
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/book?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(res => setBooks(res.data))
    }, [])
    // console.log(books)
    const handleDelete = _id=>{
        axios.delete(`http://localhost:5000/book/${_id}`)
        .then(res=>{
            if(res.data.deletedCount>0){
               const newBooks= books.filter(book=> book._id !== _id)
               setBooks(newBooks)
            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-4xl my-10">You Booked For</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               
                            </th>
                            <th>Location</th>
                            <th>Guide Name</th>
                            <th>Manager Contact</th>
                            <th>Hotel</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        books.map(book=><WishListRow handleDelete={handleDelete} book={book} key={book._id}></WishListRow>)
                       }
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default WishList;