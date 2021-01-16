import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Checkbox from '../Checkbox/Checkbox'
import './StopsFilter.css';
import { observer } from "mobx-react";
import TicketsStore from '../../Stores/ticketStore'

const StopsFilter = observer(() => {

    return (
        <div className="filter p-3">
            <h4>Количество пересадок</h4>
            <Form.Group as={ Row }>
                <Col sm={ 12 }>
                    {
                        TicketsStore.isChecked.inputs.map(el => {

                            const text = el.name === 'all'
                                ? 'Все'
                                : el.name === 0
                                    ? 'Без пересадки'
                                    : el.name === 1
                                        ? `${el.name} пересадка`
                                        : `${el.name} пересадки`

                            return <Checkbox
                                key={ el.name }
                                text={ text }
                                name={ 'formHorizontal' }
                                id={ `formHorizontal-${ el.name }` }
                                stops={ el.name }
                                isChecked={ el.isChecked }
                                filterAction={ TicketsStore.filterTickets }
                                setOnlyOne={ TicketsStore.setOnlyOne }
                            />
                        })
                    }
                </Col>
            </Form.Group>
        </div>
    )
})

export default StopsFilter;





