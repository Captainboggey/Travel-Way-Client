import axios from 'axios';
import React from 'react';

const WishListRow = ({book}) => {
    const{location,guide,hotel,cover,_id,phone}=book;
    const handleDelete = _id=>{
        axios.delete(`http://localhost:5000/book/${_id}`)
        .then(res=>console.log(res.data))
    }
    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={cover}
                                alt="" />
                        </div>
                    </div>
                    
                </div>
            </td>
            <td>
               {location}
            </td>
            <td>{guide}</td>
            <th>
               {phone}
            </th>
            <th>
                {hotel}
            </th>
            <th>
                <button onClick={()=> handleDelete(_id)} className='btn'>Cancel Trip</button>
            </th>
        </tr>

    );
};

export default WishListRow;