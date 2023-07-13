
import {createStore} from "redux";
import { todoReducer } from "../reducer/todoReducer";

export const myStore=createStore(todoReducer);