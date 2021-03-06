import React, { useState } from "react";
import OwnButton from "../OwnButton/OwnButton";
import { useSelector, useDispatch } from 'react-redux';
import Popup from '../Popup/Popup'
import logo from "../../assets/company.png";
import { Spinner } from 'react-bootstrap';
import "./TicketItem.css";
import { eraseFormData } from "../../redux/actions/setFormData";

const TicketItem = ({ ticket }) => {

    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const loader = useSelector(state => state.loader);
    const dispatch = useDispatch();

    const currency = useSelector(state => state.tickets.initialCurrency);
    const currentPrice = Math.floor(ticket.price * currency.ratio);

    const handleClose = () => {

        setShow(false);
        setSuccess(false);
        dispatch(eraseFormData())
    };
    const handleShow = () => setShow(true);

    const formatDate = date => {

        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' };
        const newDate = new Date(date).toLocaleDateString("ru-RU", options);
        const slicedDate = newDate.split(',').slice(1);
        const resultData = slicedDate.concat(newDate.split(',').slice(0,1)).join('').trim();

        return resultData.replace(/\./, ",");
    }

    const changeSuccess = bool => {
        setSuccess(bool)
    }

    return (
        <>
            <div className="item">
                <div className="item__left">
                    <img className="item__company-logo" src={ logo } alt={ 'company' }/>
                    {
                        loader
                        ?
                            <OwnButton 
                                price={ `${currentPrice} ${currency.name}` } 
                                handleShow={ handleShow } 
                            />
                        :
                            <Spinner animation="border" variant="primary" />
                    }

                </div>
                <div className="item__right">
                    <div className="time">
                        <p className="time__departure">{ ticket.departure_time }</p>
                        <p className="time__stops">{ ticket.stops ? ticket.stops : 'Без' } пересадки</p>
                        <p className="time__arrivals">{ ticket.arrival_time }</p>
                    </div>
                    <div className="place">
                        <p className="place__from">{ ticket.origin }, { ticket.origin_name }</p>
                        <p className="place__to">{ ticket.destination }, { ticket.destination_name }</p>
                    </div>
                    <div className="date">
                        <p className="date__from">{formatDate(ticket.departure_date) }</p>
                        <p className="date__to">{formatDate(ticket.arrival_date) }</p>
                    </div>
                </div>
            </div>
            <Popup
                success={ success }
                changeSuccess={ changeSuccess }
                isShow={ show }
                handleClose={ handleClose }
                data={ ticket }
                price={ `${currentPrice} ${currency.name}` }/>
        </>
    )
}

export default TicketItem;