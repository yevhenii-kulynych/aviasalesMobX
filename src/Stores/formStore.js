import { makeAutoObservable, observable, action } from "mobx";

class FormStore {

    initialState = {};

    constructor() {

        makeAutoObservable(this, {
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