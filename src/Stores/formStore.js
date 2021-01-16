import { makeObservable, observable, action } from "mobx";

class FormStore {

    initialState = {};

    constructor() {

        makeObservable(this, {
            initialState: observable,
            setData: action,
            eraseData: action
        })
    }

    setData = data => {

        this.initialState = data;
    }

    eraseData = () => {
        this.initialState = {};
    }
}

export default new FormStore();