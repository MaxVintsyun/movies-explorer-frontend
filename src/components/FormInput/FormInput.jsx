import { useState } from "react";

function FormInput({ className, defaultValue, htmlFor, id, name, type, placeholder, handleValue, checkValue }) {
    const [isValid, setIsValid] = useState(true);
    const [errMessage, setErrMessage] = useState('');

    const validateValue = (evt) => {
        if (typeof checkValue === 'function') {
            if (checkValue(evt.target.value)) {
                setIsValid(true);
                setErrMessage('');
            } else {
                setIsValid(false);
                setErrMessage(evt.target.validationMessage || 'Введены неккоректные данные');
            }
        } else {
            setIsValid(evt.target.validity.valid);
            setErrMessage(evt.target.validationMessage);
        }
    }

    const handleChange = (evt) => {
        validateValue(evt);

        const isValueValid = checkValue?.(evt.target.value) ?? true;

        if (isValueValid && evt.target.validity.valid && !evt.target.validationMessage) {
            handleValue(evt.target.value);
        } else {
            handleValue('');
        }
    }

    return (
        <label className={`${className}__field`} htmlFor={htmlFor}>
            <span className={`${className}__placeholder`}>{placeholder}</span>
            <input className={`${className}__input ${isValid ? '' : `${className}__input_error`}`} defaultValue={defaultValue || ''} id={id} name={name} type={type} onChange={handleChange} required />
            <span className={`${className}__error ${!errMessage ? '' : `${className}__error_active`}`}>{errMessage}</span>
        </label>
    );
}

export default FormInput;