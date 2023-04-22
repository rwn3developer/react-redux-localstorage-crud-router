import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import { Deletedata } from "../action";
const View = () => {

    const selector = useSelector(state => state.crud.data);
    const dispatch = useDispatch();

    const deletedata = (id) => {
        dispatch(Deletedata(id));
    }

    return (
        <>
            <Navbar/>
            <center>
                <h1>View Record</h1>
                <table border={1}>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Action</td>

                    </tr>

                    {
                        selector.map((val,id)=>{
                            return (
                                <tr key={id}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>
                                        <button><Link to='/add'>Add</Link></button> || 
                                        <button onClick={ () => deletedata(val.id) }>Delete</button> || 
                                    </td>
                                </tr>
                            )
                        })
                    }
                        

                </table>
            </center>
        </>
    )
}

export default View;