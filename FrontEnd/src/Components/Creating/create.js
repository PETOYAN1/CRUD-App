import React, { useState } from 'react'
import { addUser } from '../../reducer/UserReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router';

const style = {
  'background' : 'linear-gradient(285deg, rgb(120 166 203), rgb(45 40 123))'
}

function Create() {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [office, setOffice] = useState('');
    const [age, setAge] = useState(0);
    const users = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id : users[users.length - 1].id + 1, name : name, position : position, office : office , age : age}));
        navigate('/home');
    }
  return (
    <div style={style} className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='create-div w-50 text-white p-5'>
          <h3>Add New User</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>name:</label>
              <input onChange={(e) => setName(e.target.value)} placeholder='Enter name' className='form-control' type="text" name="name"/> 
            </div>
            <div>
              <label>position:</label>
              <input onChange={(e) => setPosition(e.target.value)} placeholder='Enter position' className='form-control' type="text" name="position"/> 
            </div>
            <div>
              <label>office:</label>
              <input onChange={(e) => setOffice(e.target.value)} placeholder='Enter office' className='form-control' type="text" name="office"/> 
            </div>
            <div>
               <label>age:</label>
               <input onChange={(e) => setAge(e.target.value)} placeholder='Enter age' className='form-control' type="number" name="age"/>
            </div>
                  <input className='btn btn-info mt-3 text-white' type="submit" value="Create"/>
              </form>
            </div>
    </div>
  )
}

export default Create;