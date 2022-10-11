import { updateTodoText } from '../actions';

const updateTodo = (todoId, updateText) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: updateText
      }),
      headers: { 'Content-Type': 'application/json; charset= UTF-8' },
    });
    const todo = await response.json();

    dispatch(updateTodoText(todo?.id, todo?.text));
  };
};

export default updateTodo;
