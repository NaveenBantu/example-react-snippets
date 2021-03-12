import { NEW, STORE, EDIT, SELECT, DELETE } from "./action-types";

export function onNew(payload) {

    return { type: NEW, payload };

}

export function onStore(payload) {

  return { type: STORE, payload };

}

export function onEdit(payload) {

  return { type: EDIT, payload };

}

export function onSelect(payload) {

  return { type: SELECT, payload };

}

export function onDelete(payload) {

  return { type: DELETE, payload };

}
