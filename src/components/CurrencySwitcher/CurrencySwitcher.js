import React, { useEffect } from 'react';
import { ButtonGroup, Button } from "react-bootstrap";
import { RUB, USD, EUR, } from '../../redux/types/currencyTypes';
import './CurrencySwitcher.css';
import TicketsStore from '../../Stores/ticketStore';
import { observer } from "mobx-react";



const CurrencySwitcher = observer(() => {

    useEffect(() => {

        TicketsStore.fetchCurrencyRates(`https://api.exchangeratesapi.io/latest?base=RUB`)
    }, [])

    return (
        <div className="container currency pt-3 pb-3">
            <h2>Валюта</h2>
            <ButtonGroup className="mr-2" aria-label="Second group">
                <Button onClick={ () => TicketsStore.changeCurrency(RUB) }>{ RUB }</Button>
                <Button onClick={ () => TicketsStore.changeCurrency(USD) }>{ USD }</Button>
                <Button onClick={ () => TicketsStore.changeCurrency(EUR) }>{ EUR }</Button>
            </ButtonGroup>
        </div>
    )
})


export default CurrencySwitcher;
