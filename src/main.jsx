import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Main from './Layout/Main.jsx';
import Register from './Pages/Home/Register/Register.jsx';
import Login from './Pages/Login/Login.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import UserHome from './UserManagement/UserHome.jsx';
import UsersList from './UserManagement/UsersList.jsx';
import Update from './UserManagement/Update.jsx';
import AddData from './UserManagement/AddData.jsx';
import DataDetails from './Pages/Home/DataDetails.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Tours from './Pages/Tours/Tours.jsx';
import Hotels from './Pages/Hotels/Hotels.jsx';
import Book from './Pages/Book/Book.jsx';
import BookAdmin from './UserManagement/BookAdmin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path: "/",
      element:<Home></Home>,
      loader:()=> fetch("http://localhost:5000/addData")
    },{
      path:"/register",
      element:<Register></Register>
    },{
      path:"/login",
      element:<Login></Login>
    },{
      path:"/usermanagement",
      element:<PrivateRoute><UserHome></UserHome>,</PrivateRoute>
      
    },{
      path:"/userslist",
      element:<UsersList></UsersList>,
      loader:()=>fetch("http://localhost:5000/users")

    },{
      path:"/updateuser/:id",
      element:<Update></Update>,
      loader:({params})=> fetch(`http://localhost:5000/users/${params.id}`)
    },{
      path:"/addData",
      element:<AddData></AddData>
    },{
      path:"/addData/:id",
      element:<PrivateRoute><DataDetails></DataDetails></PrivateRoute>,
      loader: ({params})=>fetch(`http://localhost:5000/addData/${params.id}`)
    },{
      path:"/tours",
      element:<Tours></Tours>,
      loader:()=> fetch('http://localhost:5000/addData')
    },{
      path:"/hotels",
      element:<Hotels></Hotels>,
      loader:()=>fetch('http://localhost:5000/addData')
    },{
      path:"/book/:id",
      element:<PrivateRoute><Book></Book></PrivateRoute>,
      loader: ({params})=>fetch(`http://localhost:5000/addData/${params.id}`)
      
    },{
      path:"/bookAdmin",
      element:<BookAdmin></BookAdmin>,
      loader: ()=> fetch('http://localhost:5000/book')

    }]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
