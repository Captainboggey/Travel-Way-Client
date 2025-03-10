import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = ({data}) => {
    const {  tour_title,
        tour_location,
        bus_name,
        bus_contact,
        bus_photo,
        tour_cover_photo,
        hotel_image,
        hotel_description,
        hotel_name,
        total_days,
        tour_manager_contact,
        tour_manager,
        ratings,
        things_to_carry,
        description,
        places,
        guide_contact,
        guide_name,
        price, _id} =data;
    return (
        
        <div className="card card-compact bg-base-100 w-96 mx-auto shadow-xl">
        <figure>
          <img
            src={tour_cover_photo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tour_title}</h2>
          <p>Location: {tour_location}</p>
          <p>Total Days: {total_days}</p>
          <p>Places: {places}</p>
          <p className='text-green-500'>Price: {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/addData/${_id}`}><button className="btn btn-primary bg-yellow-400 border-none">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default TourCard;