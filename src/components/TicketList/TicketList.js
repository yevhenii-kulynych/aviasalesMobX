import React, { useEffect } from "react";
import TicketItem from "../TicketItem/TicketItem";
import { observer } from "mobx-react";
import { useRootStoreContext } from "../../context/StoreContext";
import "./TicketList.css";


const TicketList = observer(() => {

    const tickets = useRootStoreContext();

    useEffect(() => {
        tickets.ticketStore.fetchTickets(`tickets.json`)
    }, [tickets.ticketStore])

    const isFiltered = tickets.ticketStore.isChecked.inputs.some(stop => stop.isChecked);

    return (
        <div className="ticket-list">
            {
                !isFiltered
                    ?
                    tickets.ticketStore.tickets.map(el => {

                        return <TicketItem
                                    key={ Math.floor(Math.random() * 1e6) }
                                    ticket={ el }
                                />
                    })
                    :
                    tickets.ticketStore.tickets.filter(e => tickets.ticketStore.isChecked.inputs.some(stop => (stop.name === e.stops && stop.isChecked) || (stop.name === 'all' && stop.isChecked))).map(el => {

                        return <TicketItem
                                    key={ Math.floor(Math.random() * 1e6) }
                                    ticket={ el }
                                />
                    })
            }
        </div>
    )
})

export default TicketList;
