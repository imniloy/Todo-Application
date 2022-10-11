import { useState } from 'react';
import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import updateTodo from '../redux/todos/thunk/updateTodo';
import EditSvg from './../assets/icons/EditSvg';
import deleteTodo from './../redux/todos/thunk/deleteTodo';
import updateColorStatus from './../redux/todos/thunk/updateColorStatus';
import updateStatus from './../redux/todos/thunk/updateStatus';

export default function Todo({ todo }) {
    const { text, id, completed, color } = todo;
    const dispatch = useDispatch();
    const [updateInput, setUpdateInput] = useState(text);
    const [updateMood, setUpdateMood] = useState(false);


    const handleStatusChange = (todoId) => {
        dispatch(updateStatus(todoId, completed));
    };

    const handleColorChange = (todoId, color) => {
        dispatch(updateColorStatus(todoId, color));
    };

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(id)
        id && dispatch(updateTodo(id, updateInput));
        setUpdateMood(!updateMood)
    };

    const handleUpdateTodo = (e) => {
        setUpdateInput(e.target.value);
    };

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed &&
                    "border-green-500 focus-within:border-green-500 cursor-pointer	"
                    }`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleStatusChange(id)}
                    className="opacity-0 cursor-pointer	absolute rounded-full"
                />
                {completed && (
                    <svg
                        className="cursor-pointer fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}
            </div>

            <div
                className={`select-none flex-1`}
            >
                {updateMood && !completed ?
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={updateInput}
                            onChange={handleUpdateTodo}
                            className="outline-none cursor-pointer w-[80%]"
                        />
                    </form> :
                    <span>{text}</span>
                }
            </div>

            {!completed && <div className="" onClick={() => setUpdateMood(!updateMood)}>
                <EditSvg className="h-4 w-4" />
            </div>}


            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${color === "green" && "bg-green-500"
                    }`}
                onClick={() => handleColorChange(id, "green")}
            ></div>

            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${color === "yellow" && "bg-yellow-500"
                    }`}
                onClick={() => handleColorChange(id, "yellow")}
            ></div>

            <div
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${color === "red" && "bg-red-500"
                    }`}
                onClick={() => handleColorChange(id, "red")}
            ></div>

            <img
                src={cancelImage}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
                onClick={() => handleDelete(id)}
            />
        </div >
    );
}
