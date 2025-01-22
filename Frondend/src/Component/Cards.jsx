import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { Link } from "react-router-dom";


const Card = ({ taskproperty }) => {


const navigate = useNavigate;
const deletetask = async () => {
    const title = taskproperty.title;
    console.log("delete",+title);
  const confirm = window.confirm("Sure want to delete");
  if (!confirm) return;
  console.log("delete");
  const res = await fetch(`/api/tasks/${taskproperty.title}`, {
    method: "DELETE",
  });
  navigate("/");
};
  return (
    <>
      <div className=" bg-gray-100  rounded-md shadow-2xl flex flex-col r mx-5 my-5 py-10 pl-10">
        <h2 className=" font-bold text-2xl  ">
          Title:
          <span className="text-xl font-normal ml-4 ">
            {taskproperty.title}
          </span>
        </h2>
        <h2 className=" font-bold text-2xl ">
          Description:
          <span className="text-xl font-normal ml-4 ">
            {taskproperty.description}
          </span>
        </h2>
        <h2 className=" font-bold text-2xl ">
          Status:
          <span className="text-xl font-normal ml-4 ">
            {taskproperty.status}
          </span>
        </h2>
        <h2 className=" font-bold text-2xl ">
          Priority:
          <span className="text-xl font-normal ml-4 ">
            {taskproperty.priority}
          </span>
        </h2>
        <h2 className=" font-bold text-2xl ">
          Created Date:
          <span className="text-xl font-normal ml-4 ">
            {taskproperty.createdAt}
          </span>
        </h2>

        <button
          onClick={() => deletetask()}
          className="flex text-red-500 font-bold text-xl rounded-full h-10 w-32 focus:outline-none focus:shadow-outline  justify-center items-center"
        >
          Remove task
        </button>

        <Link
          to={`/edittask/${taskproperty.title}`}
          className=" float-right text-xl font-normal ml-10"
        >
          Edit task
        </Link>
      </div>
    </>
  );
};

export default Card