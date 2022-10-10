import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";



export default function AllTodosList() {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();
    let completedTodos;
    let inCompletedTodos;

    useEffect(() => {
        dispatch(fetchTodos);
    }, [dispatch]);

    const filterByStatus = (todo) => {
        const { status } = filters;
        switch (status) {
            case "Complete":
                return todo.completed;

            case "Incomplete":
                return !todo.completed;

            default:
                return true;
        }
    };

    const filterByColors = (todo) => {
        const { colors } = filters;
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return true;
    };

    completedTodos = todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) =>
            todo?.completed && <Todo todo={todo} key={todo.id} />
        )

    inCompletedTodos = todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) =>
            !todo?.completed && <Todo todo={todo} key={todo.id} />
        )

    return (
        <div className="">
            <div className="mt-2 text-gray-700 text-sm max-h-[200px] overflow-y-auto  space-y-3">
                <div className="">
                    {inCompletedTodos}
                </div>
            </div>

            <h2 className="font-bold text-base text-gray-700 my-4">Completed Todos</h2>

            <div className="mt-2 text-gray-700 text-sm max-h-[200px] overflow-y-auto  space-y-3">
                <div className="mt-4">
                    {completedTodos}
                </div>
            </div>
        </div>

    );
}
