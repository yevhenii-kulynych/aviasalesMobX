import React, { useEffect } from 'react';
import { ButtonGroup, Button } from "react-bootstrap";
import { RUB, USD, EUR, } from '../../redux/types/currencyTypes';
import './CurrencySwitcher.css';
import { observer } from "mobx-react";
import { useRootStoreContext } from "../../context/StoreContext";


const CurrencySwitcher = observer(() => {

    const tickets = useRootStoreContext();

    useEffect(() => {

        tickets.ticketStore.fetchCurrencyRates(`https://api.exchangeratesapi.io/latest?base=RUB`)
    }, [tickets.ticketStore])

    return (
        <div className="container currency pt-3 pb-3">
            <h2>Валюта</h2>
            <ButtonGroup className="mr-2" aria-label="Second group">
                <Button onClick={ () => tickets.ticketStore.changeCurrency(RUB) }>{ RUB }</Button>
                <Button onClick={ () => tickets.ticketStore.changeCurrency(USD) }>{ USD }</Button>
                <Button onClick={ () => tickets.ticketStore.changeCurrency(EUR) }>{ EUR }</Button>
            </ButtonGroup>
        </div>
    )
})


export default CurrencySwitcher;
