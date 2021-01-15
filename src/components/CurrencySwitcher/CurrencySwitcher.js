import React, { useEffect } from 'react';
import { ButtonGroup, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { switchCurrency } from "../../redux/actions/switchCurrency";
import { getCurrencyRatesAsync } from '../../redux/actions/getCurrencyRates'
import { RUB, USD, EUR, } from '../../redux/types/currencyTypes';
import './CurrencySwitcher.css';

const CurrencySwitcher = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getCurrencyRatesAsync())
    }, [dispatch])

    return (
        <div className="container currency pt-3 pb-3">
            <h2>Валюта</h2>
            <ButtonGroup className="mr-2" aria-label="Second group">
                <Button onClick={ () => dispatch(switchCurrency(RUB)) }>{ RUB }</Button> 
                <Button onClick={ () => dispatch(switchCurrency(USD)) }>{ USD }</Button> 
                <Button onClick={ () => dispatch(switchCurrency(EUR)) }>{ EUR }</Button>
            </ButtonGroup>
        </div>
    )
}


export default CurrencySwitcher;
