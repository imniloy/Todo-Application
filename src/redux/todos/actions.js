import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    DELETED,
    LOADED,
    TOGGLED,
    UPDATEDTODOTEXT,
} from "./actionTypes";

export const loaded = (todos) => {
    return {
        type: LOADED,
        payload: todos,
    };
};

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText,
    };
};

export const updateTodoText = (id, updateText) => {
    return {
        type: UPDATEDTODOTEXT,
        payload: { id, updateText },
    }
}

export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId,
    };
};

export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color,
        },
    };
};

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId,
    };
};

export const allCompleted = () => {
    return {
        type: ALLCOMPLETED,
    };
};

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    };
};
