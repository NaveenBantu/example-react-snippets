import Todo from "../model/Todo";
import { NEW, STORE, EDIT, SELECT, DELETE } from "./action-types";

const initialState = {
    todo:  null,
    todos: []
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case NEW:
            return doNew(state);
        case STORE:
            return doStore(state);
        case EDIT:
            return doEdit(state);
        case SELECT:
            return doSelect(state);
        case DELETE:
            return doDelete(state);
    } // switch

    return state;

}

function doNew(state) {
    return { ...state, ...{ todo: new Todo() } };
}

function doStore(state) {
    return { ...state, ...{ todo: new Todo() } };
}

function doEdit(state) {
    return { ...state, ...{ todo: new Todo() } };
}

function doSelect(state) {
    return { ...state, ...{ todo: new Todo() } };
}

function doDelete(state) {
    return { ...state, ...{ todo: new Todo() } };
}

export default rootReducer;
