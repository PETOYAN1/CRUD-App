import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './header';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../../reducer/UserReducer';
import { PropTypes } from 'prop-types';

function Home(props) {
    const users = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({id : id}))
    }
  return (
    <>
    <Header />
    <div className="Container">
            <h2 className='margin-left'>{props.name}</h2>
            <div className="users-container">
            <Link to={'/create'} className='btn btn-success'>{props.create}</Link>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">name</th>
                    <th scope="col">position</th>
                    <th scope="col">office</th>
                    <th scope="col">age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.position}</td>
                                <td>{item.office}</td>
                                <td>{item.age}</td>
                                <td>
                                    <button onClick={() => navigate(`/update/${item.id}`)} className='btn btn-primary'>Edit</button>
                                    <button onClick={() => handleDelete(item.id)} className='btn btn-danger ms-2'>Delete</button>
                                </td>
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

Home.propTypes = {
    name : PropTypes.string,
    create : PropTypes.string
}

export default Home;