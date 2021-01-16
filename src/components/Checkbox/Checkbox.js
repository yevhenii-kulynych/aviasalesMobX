import React, { useState, useRef, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import './Checkbox.css';
import { observer } from "mobx-react";

const Checkbox = observer(({setOnlyOne, filterAction, text, name, id, stops, isChecked }) => {

    const [isShown, setIsShown] = useState(false);
    const inp = useRef(null)

    const checkboxHandler = event => {

        if (event.target.checked) {

            filterAction(stops)
        } else {

            filterAction(stops)
        }
    }

    useEffect(() => {
        inp.current.checked = isChecked
    }, [isChecked])

    return (
        <div className={`input-wrap ${isShown ? 'hovered' : ''}`} 
            onMouseEnter={() => setIsShown(true)} 
            onMouseLeave={() => setIsShown(false)}
        >
            <Form.Check
                type="checkbox"
                label={ text }
                name={ name }
                id={ id }
                onClick={ checkboxHandler }
                ref={ inp }
            />
            {
                isShown && (
                    <p className="text-hover"
                       onClick={ () => { setOnlyOne(stops) } }
                    >
                        Только
                    </p>
                )
            }
        </div>
    )
})

export default Checkbox;