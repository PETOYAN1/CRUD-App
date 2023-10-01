import { useEffect, useState } from "react"
import axios from "axios"
import { Header } from "./header";

export const Main = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    }, [])

    return (
        <>
        <Header />
        <div className="main-content">
            <h2 style={{'marginLeft' : '2em'}}>Sales Information</h2>
            <div className="users-container thead-dark">
            <table className="table table-striped table-dark">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Data of Birth</th>
                    <th scope="col">Name</th>
                    <th scope="col">Password</th>
                    <th scope="col">Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.ID}</td>
                                <td>{item.DateBirth}</td>
                                <td>{item.Login}</td>
                                <td>{item.Password}</td>
                                <td>0$</td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
