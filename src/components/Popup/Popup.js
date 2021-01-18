import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import FormComponent from "../FormComponent/FormComponent"
import { observer } from "mobx-react";
import { useRootStoreContext } from "../../context/StoreContext";
import "./Popup.css";

const Popup = observer(({success, changeSuccess, data, isShow, handleClose, price }) => {

    const formContext = useRootStoreContext();
    const initialState = formContext.formStore.initialState;

    const [initialFormState] = useState({
        email: '',
        phone: '',
        firstName: '',
        secondName: '',
        passport: '',
        price: price,
        place_from: data.origin_name,
        place_to: data.destination_name,
        time_departure: data.departure_time,
        time_arrivals: data.arrival_time,
        stops: data.stops
    })

    return (
        <>
          <Modal
            show={ isShow }
            onHide={ handleClose }
            backdrop="static"
            keyboard={ false }
          >
            <Modal.Header closeButton>
              <Modal.Title>Покупка билета</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                {
                  !success 
                    
                    ?
                      <>
                        <div className="item">
                            <div className="item__right">
                                <div className="time">
                                    <p className="time__departure">{ data.departure_time }</p>
                                    <p className="time__stops">{ data.stops ? data.stops : 'Без' } пересадки</p>
                                    <p className="time__arrivals">{ data.arrival_time }</p>
                                </div>
                                <div className="place">
                                    <p className="place__from">{ data.origin }, { data.origin_name }</p>
                                    <p className="place__to">{ data.destination }, { data.destination_name }</p>
                                </div>
                            </div>
                        </div>
                        <FormComponent initialState={ initialFormState } changeSuccess={ changeSuccess } closeHandler={ handleClose } />
                      </>
                    :
                      <div>
                          <h1>Успешно</h1>
                          <code>
                              Информация:<br/>
                              Имя: { initialState.firstName }<br/>
                              Фамилия: { initialState.secondName }<br/>
                              Номер паспорта: { initialState.passport }<br/>
                              Телефон: { initialState.phone }<br/>
                              Email: { initialState.email }<br/>
                              Цена: { initialState.price }<br/>
                              Откуда: { initialState.place_from } - Куда: { initialState.place_to }<br/>
                              Время вылета: { initialState.time_departure } - Время прибытия: { initialState.time_arrivals }<br/>
                              Пересадки: { initialState.stops }
                          </code>
                      </div>
                }
                </>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </>
      );
})

export default Popup;