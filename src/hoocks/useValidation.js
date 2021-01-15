import { useState } from 'react';

export const useValidation = regexp => {

    const [value, setValue] = useState('');
    const [color, setColor] = useState('red');
    const [error, setError] = useState(true)
    const [reg] = useState(regexp);


    const changeHandler = event => {

        setValue(event.target.value);

        if (event.target.value.match(new RegExp(reg, 'i'))) {

            setColor('green')
            setError(false)
        } else {

            setColor('red')
            setError(true)
        }
    }

    return {
        color, changeHandler, error, value
    }
}
