import React from 'react';
import UserManagementNavbar from './UserManagementNavbar';
import { useLoaderData } from 'react-router-dom';
import BookTable from './BookTable';

const BookAdmin = () => {
    const bookings = useLoaderData();
    // console.log(bookings)
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
                        bookings.map(book=><BookTable key={book._id} book={book}></BookTable>)
                       }
                     
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default BookAdmin;