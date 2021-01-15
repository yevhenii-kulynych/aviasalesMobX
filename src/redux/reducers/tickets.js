import { GET_TICKETS } from "../types/getTickets";
import { RUB ,CHANGE_CURRENCY, FETCH_CURRENCY_RATES } from '../types/currencyTypes';
import { FILTER, ONLY_ONE } from '../types/filter';

const initialState = {
  tickets: [],
  currencyRates: [],
  initialCurrency: { name: RUB, ratio: 1 },
  isChecked: { inputs: []}
}

const tickets = (state = initialState, action) => {

    switch (action.type) {

        case GET_TICKETS:

            const inputAllStops = { name: 'all', isChecked: true }
            const uniqueInputStops = [...new Set(action.payload.map(el => el.stops))].sort();
            const checkBoxes = uniqueInputStops.map(el => Object.assign({}, {
                name: el,
                isChecked: false
            }))

            return Object.assign({}, state, {

                tickets: [...action.payload],
                isChecked: { inputs: [inputAllStops, ...checkBoxes] }
            })

        case FETCH_CURRENCY_RATES:

            const arrayOfCurrencyRates = [];

            for (const [key, value] of Object.entries(action.payload)) {

                const obj = {};
                obj.name = key;
                obj.ratio = value;
                arrayOfCurrencyRates.push(obj)
            }

            return Object.assign({}, state, {

                currencyRates: [ ...arrayOfCurrencyRates]
            })
          
        case CHANGE_CURRENCY:

            const newValue = {};
            state.currencyRates.forEach(currency => {

                if (currency.name === action.payload) {

                    newValue.name = currency.name;
                    newValue.ratio = currency.ratio;
                }
            })

            return Object.assign({}, state, {

                initialCurrency: { ...newValue }
            })

        case FILTER:

            let filteredInputsStatus;

            filteredInputsStatus = state.isChecked.inputs.map(el => {

                if (action.payload !== 'all') {

                    if (el.name === 'all') {

                        if (el.isChecked) {

                            el.isChecked = false;
                        }
                    }

                } else {

                    if (el.name !== 'all') {

                        if (el.isChecked) {

                            el.isChecked = false;
                        }
                    }

                }

                if (action.payload === el.name) {

                    el.isChecked ? el.isChecked = false : el.isChecked = true
                }

                return el
            })

            const allInputsAreUnChecked = filteredInputsStatus.every(input => input.isChecked === false);

            if (allInputsAreUnChecked) {

                filteredInputsStatus = filteredInputsStatus.map(element => {

                    if (element.name === 'all') element.isChecked = true;

                    return element;
                })
            }

            return Object.assign({}, state, {

                isChecked: { inputs: filteredInputsStatus }
            })

        case ONLY_ONE:

            const setOnlyOneChecked = state.isChecked.inputs.map(el => {

                if (el.name === action.payload) {

                    el.isChecked = true
                } else {

                    el.isChecked = false

                }

                return el
            })

            return Object.assign({}, state, {

                isChecked: { inputs: setOnlyOneChecked }
            })

        default:

          return state;
      }  
}

export default tickets;