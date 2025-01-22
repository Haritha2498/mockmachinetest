import React from 'react'
import { Link } from 'react-router-dom';

const Task = () => {
  return (
    <div className="bg-slate-400 w-full h-screen">
      <Link to="/viewtask" className="ml-[20%] font-2xl float-right">
        <h1 className="text-2xl font-bold text-center pt-[25%]">View Task</h1>
      </Link>
      <h1 className="text-4xl font-bold text-center pt-[25%]">
        TASK MANAGEMENT SYSTEM
      </h1>
    </div>
  );
}

export default Task