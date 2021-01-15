import React from 'react';
import { setFormData } from "../../redux/actions/setFormData";
import { useDispatch } from "react-redux";
import Input from '../Input/Input';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import "./FormComponent.css";

const FormComponent = ({initialState, changeSuccess, closeHandler }) => {

    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={ initialState }
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Email введен не верно')
                    .required('Обязательное поле')
                ,
                phone: Yup.number()
                    .positive()
                    .integer()
                    .typeError('Номер должен быть числом')
                    .required('Обязательное поле')
                ,
                firstName: Yup.string()
                    .required('Обязательное поле')
                    .min(3, 'Имя как минимум должно содержать 3 буквы')
                    .typeError('должно начинаться с большой буквы')
                    .matches(/^[A-ZА-Я][a-zа-я]{2,20}/, {message: 'Имя должно начинаться с большой буквы', excludeEmptyString: true })
                ,
                secondName: Yup.string()
                    .required('Обязательное поле')
                    .min(3, 'Имя как минимум должно содержать 3 буквы')
                    .matches(/^[A-ZА-Я][a-zа-я]{2,20}/, {message: 'Фамилия должна начинаться с большой буквы', excludeEmptyString: true })
                ,
                passport: Yup.string()
                    .min(6, 'Номер как минимум должно содержать 4 буквы')
                    .required('Обязательное поле')
            })}
            onSubmit={fields => {

                changeSuccess(true)
                dispatch(setFormData(fields))
            }}
        >
            {
                ({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     isValid,
                     handleSubmit,
                     isValidating
                }) => (
                    <Form>
                        <Input
                            text={ 'Email' }
                            htmlFor={ 'email' }
                            name={ 'email' }
                            errors={ errors.email }
                            touched={ touched.email }
                        />
                        <Input
                            text={ 'Телефон' }
                            htmlFor={ 'phone' }
                            name={ 'phone' }
                            errors={ errors.phone }
                            touched={ touched.phone }
                        />
                        <Input
                            text={ 'Имя' }
                            htmlFor={ 'firstName' }
                            name={ 'firstName' }
                            errors={ errors.firstName }
                            touched={ touched.firstName }
                        />
                        <Input
                            text={ 'Фамилия' }
                            htmlFor={ 'secondName' }
                            name={ 'secondName' }
                            errors={ errors.secondName }
                            touched={ touched.secondName }
                        />
                        <Input
                            text={ 'Номер паспорта' }
                            htmlFor={ 'passport' }
                            name={ 'passport' }
                            errors={ errors.passport }
                            touched={ touched.passport }
                        />
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2" disabled={ !isValid }>Купить</button>
                            <button type="reset" className="btn btn-secondary mr-2">Сбросить</button>
                            <button type="button" className="btn btn-danger" onClick={ closeHandler }>Отказаться</button>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormComponent;