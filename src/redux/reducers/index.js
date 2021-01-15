import { combineReducers } from "redux";
import tickets from "./tickets"
import loader from "./loader";
import form from "./form";

const allReducers = combineReducers({

    tickets,
    loader,
    form
})

export default allReducers;