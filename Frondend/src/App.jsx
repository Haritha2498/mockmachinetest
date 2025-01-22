import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Task from './Pages/Task';
import Tasklist from './Pages/Tasklist';
import Addtask from './Pages/Addtask';
import Edittask from './Pages/EditTask';
import Filtertask from './Pages/Filtertask';

function App() {
 const router = createBrowserRouter(
   createRoutesFromElements(
     <>
       <Route path="/" element={<Task />} />
       <Route path="/viewtask" element={<Tasklist />} />

       <Route path="/addtask" element={<Addtask />} />

       <Route path="/edittask/:id" element={<Edittask />} />
       <Route path="/filter" element={<Filtertask />} />
     </>
   )
 );

 return (
   <>
     <RouterProvider router={router} />
   </>
 );
}

export default App
