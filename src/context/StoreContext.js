import { createContext, useContext } from "react";
import TicketsStore from "../Stores/ticketStore";
import FormStore from "../Stores/formStore";


export const rootStore = {
    ticketStore: new TicketsStore(),
    formStore: new FormStore()
}
export const RootStoreContext = createContext({ticketStore: null, formStore: null});

export const useRootStoreContext = () => useContext(RootStoreContext);

