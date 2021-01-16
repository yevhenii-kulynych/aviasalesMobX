import axios from "axios";
import { makeObservable, observable, action, runInAction } from "mobx";


class TicketsStore {

    tickets = [];
    isChecked = { inputs: [] };
    currencyRates = [];
    initialCurrency = { name: 'RUB', ratio: 1 };

    constructor() {

        makeObservable(this, {
            tickets: observable,
            isChecked: observable,
            currencyRates: observable,
            initialCurrency: observable,
            fetchTickets: action,
            filterTickets: action.bound,
            setOnlyOne: action,
            fetchCurrencyRates: action,
            changeCurrency: action,
        })
    }

    fetchTickets = async (url) => {
        try {

            const response = await axios.get(url);
            const data = await response.data;

            runInAction(() => {

                this.tickets = [...data.tickets];

                //set isChecked.inputs
                const inputAllStops = { name: 'all', isChecked: true }
                const uniqueInputStops = [...new Set(data.tickets.map(el => el.stops))].sort();
                const checkBoxes = uniqueInputStops.map(el => Object.assign({}, {
                    name: el,
                    isChecked: false
                }))
                this.isChecked = { inputs: [inputAllStops, ...checkBoxes] }
            })
        } catch (e) {

            throw e;
        }

    }

    fetchCurrencyRates = async (url) => {
        try {

            const response = await axios.get(url);
            const data = await response.data;

            runInAction(() => {

                const arrayOfCurrencyRates = [];

                for (const [key, value] of Object.entries(data.rates)) {

                    const obj = {};
                    obj.name = key;
                    obj.ratio = value;
                    arrayOfCurrencyRates.push(obj)
                }

                this.currencyRates = arrayOfCurrencyRates;
            })
        } catch (e) {
            throw e;
        }
    }

    filterTickets(stopNumber) {

        const filteredInputsStatus = this.isChecked.inputs.map(el => {

            if (stopNumber !== 'all') {

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

            if (stopNumber === el.name) {

                el.isChecked ? el.isChecked = false : el.isChecked = true
            }

            return el
        })

        this.isChecked = { inputs: filteredInputsStatus }
    }

    setOnlyOne = (stopNumber) => {

        const setOnlyOneChecked = this.isChecked.inputs.map(el => {

            if (el.name === stopNumber) {

                el.isChecked = true
            } else {

                el.isChecked = false

            }

            return el
        })

        this.isChecked = { inputs: setOnlyOneChecked }
    }

    changeCurrency = (currency) => {

        const newValue = {};
        this.currencyRates.forEach(element => {

            if (element.name === currency) {

                newValue.name = element.name;
                newValue.ratio = element.ratio;
            }
        })

        this.initialCurrency = newValue;
    }
}

export default new TicketsStore();
