import { useParams } from "react-router-dom";
import { Edittime } from "../action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { Update } from "../action";

const Edit = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
        dispatch(Edittime(id));
        
        const edittime = useSelector(state => state.crud.user);
        const [input,setInput] = useState({
            id : edittime.id,
            name : edittime.name,
            email : edittime.email,
            password : edittime.password
        })

        const handleChange = (e) => {
            let name = e.target.name;
            let value = e.target.value;
            setInput({
                ...input,[name] : value
            })
           
        }

        const save = () => {
            const {id,name,email,password} = input;
            const obj = {
                id : id,
                name : name,
                email : email,
                password : password
            }
            dispatch(Update(obj));
        }


    return (
        <>
            <Navbar/>
            <center>
                <h1>Edit User</h1>

                <table border={1}>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="name" onChange={ (e) => handleChange(e) } value={input.name} /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" name="email" onChange={ (e) => handleChange(e) } value={input.email} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="text" name="password" onChange={ (e) => handleChange(e) } value={input.password} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" onClick={ () => save() } value="submit"/></td>
                    </tr>
                </table>
            </center>
        </>
    )
}

export default Edit;