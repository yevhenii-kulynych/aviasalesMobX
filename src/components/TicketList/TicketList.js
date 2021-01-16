import React, { useEffect } from "react";
import TicketItem from "../TicketItem/TicketItem";
import "./TicketList.css";
import { observer } from "mobx-react";
import TicketStore from '../../Stores/ticketStore';

const TicketList = observer(() => {

    useEffect(() => {
         TicketStore.fetchTickets(`tickets.json`)
    }, [])

    const isFiltered = TicketStore.isChecked.inputs.some(stop => stop.isChecked);

    return (
        <div className="ticket-list">
            {
                !isFiltered
                    ?
                    TicketStore.tickets.map(el => {

                        return <TicketItem
                                    key={ Math.floor(Math.random() * 1e6) }
                                    ticket={ el }
                                />
                    })
                    :
                    TicketStore.tickets.filter(e => TicketStore.isChecked.inputs.some(stop => (stop.name === e.stops && stop.isChecked) || (stop.name === 'all' && stop.isChecked))).map(el => {

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
