import React, { useState, FunctionComponent, ChangeEvent } from 'react';
import User from "../../interfaces/User.interface";
import uuidv1 from 'uuid/v1';
import './styles.scss'


type FormAddProps = {
    addUser: Function
}

const AddForm: FunctionComponent<FormAddProps> = ({addUser}) => {
    // console.log(props);
    // const {name, hobby, date, add, handleChange, handleChangeHobby} = useAddFormHook(addUser)
    const {add, handleChange, state} = useAddFormHook(addUser)


    return (
        <form onSubmit={(event) => add(event)}>
            <div className="group">
                {/*<input className="input" type="text" value={name} onChange={handleChange}/>*/}
                {/*<input className="input" type="text" value={hobby} onChange={handleChangeHobby}/>*/}
                {/*<input className="input" type="text" value={state.name} onChange={(e) => handleChange('name', e)}/>*/}
                {/*<input className="input" type="text" value={state.hobby} onChange={(e) => handleChange('hobby', e)}/>*/}
                {/*<input className="input" type="date" value={state.date}  onChange={(e) => handleChange('date', e)}/>*/}
                {
                    (Object.keys(state)  as Array<keyof typeof state>).map((input) => {
                        return (
                            <input
                                placeholder={`Enter user ${input}`}
                                className="input"
                                type={input === 'date' ? input : 'text'} value={state[input]}
                                onChange={(e) => handleChange(input, e)}/>

                        )
                    })
                }
            </div>

            <button className="btn btn-primary" type="submit">Add</button>
        </form>
    )
}

const initState = {
    name: '',
    hobby: '',
    date: Date.now().toLocaleString(),
}

const useAddFormHook = (addUser: Function) => {
    // console.log(props);
    // const [name, setName] = useState('');
    // const [hobby, setHobby] = useState('');
    // const [date, setHobby] = useState('');

    const [state, setState] = useState(initState)

    const reset = () => {
        // setName('');
        // setHobby('');
        setState(initState);
    };

    const add = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (state.name.trim() !== '' && state.hobby.trim() !== '') {
            const user: User = {
                id: uuidv1(),
                first_name: state.name,
                hobbies: [],
                // year: new Date(state.date).toLocaleDateString()
            }

            addUser(user)
            reset()
        }


    };

    // const add = (event: React.FormEvent<HTMLFormElement>, name: string, hobby: string): void => {
    //     event.preventDefault();
    //     if (name.trim() !== '' && hobby.trim() !== '') {
    //         const user: User = {
    //             id: uuidv1(),
    //             first_name: name,
    //             hobby: hobby,
    //             year: new Date('21.09.1999')
    //         }
    //
    //         addUser(user)
    //         reset()
    //     }
    //
    //
    // };
    const handleChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [key]: e.target.value})

    };
    // const handleChangeHobby = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setHobby(e.target.value)
    // }
    // const handleChangeHobby = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setHobby(e.target.value)
    // }

    // return {name, hobby, add, handleChange, handleChangeHobby}
    return {add, handleChange, state}
}

export default AddForm