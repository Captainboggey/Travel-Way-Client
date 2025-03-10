import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Book = () => {
  const {user}=useContext(AuthContext);

  const email = user?.email;
  console.log(email)
    const tourData=useLoaderData();
    // console.log(email)
    const location = tourData.tour_location;
    const handleBook = e=>{
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
       
        const bookingData = {firstName,lastName,phone,location,email};
        axios.post('http://localhost:5000/book',bookingData)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire("Your Booking Has Been Permitted!");
          }
        })
        .catch(error=>console.error(error.message))



        // console.log(firstName)
    }
    
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-center text-4xl my-10">Book Desired Packages</h2>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900 ">
        <form
        onSubmit={handleBook}
          noValidate=""
          action=""
          className="  mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-2  gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
           
            <div className="grid grid-cols-6 justify-center gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="phone" className="text-sm">
                  Phone
                </label>
                <input
                  
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
             
              <div className="col-span-full sm:col-span-3 form-control">
                <label htmlFor="email" className="text-sm">
                 Location
                </label>
                <input
                  name="location"
                  type="text"
                  defaultValue={location}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="form-control col-span-full">
                <input type="submit" className="btn btn-primary bg-yellow-300 border-none " value="Book" />

              </div>
             
            </div>
          </fieldset>
         
        </form>
      </section>
    </div>
  );
};

export default Book;
