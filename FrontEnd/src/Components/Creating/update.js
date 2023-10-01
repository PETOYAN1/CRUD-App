import React, { useState } from 'react'
import { addUser } from '../../reducer/UserReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { updateUser } from '../../reducer/UserReducer';
const style = {
  'background' : 'linear-gradient(285deg, rgb(120 166 203), rgb(45 40 123))'
}

function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.user);
    const existingUser = users.filter((f) => f.id == id);
    const {name, position, office, age} = existingUser[0];
    const [uname, setName] = useState(name);
    const [uPosition, setPosition] = useState(position);
    const [uOffice, setOffice] = useState(office);
    const [uAge, setAge] = useState(age);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
      event.preventDefault();
      dispatch(updateUser({
        id : id,
        name : uname,
        position : uPosition,
        office : uOffice,
        age : uAge
      }));
      navigate('/home');
    }

  return (
    <div style={style} className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='create-div w-50 text-white p-5'>
          <h3>Update User</h3>
          <form onSubmit={handleUpdate}>
            <div>
              <label>name:</label>
              <input onChange={(e) => setName(e.target.value)} defaultValue={uname} placeholder='Enter name' className='form-control' type="text" name="name"/> 
            </div>
            <div>
              <label>position:</label>
              <input onChange={(e) => setPosition(e.target.value)} defaultValue={uPosition} placeholder='Enter position' className='form-control' type="text" name="position"/> 
            </div>
            <div>
              <label>office:</label>
              <input onChange={(e) => setOffice(e.target.value)} defaultValue={uOffice} placeholder='Enter office' className='form-control' type="text" name="office"/> 
            </div>
            <div>
               <label>age:</label>
               <input onChange={(e) => setAge(e.target.value)} defaultValue={uAge} placeholder='Enter age' className='form-control' type="number" name="age"/>
            </div>
                  <input className='btn btn-info mt-3 text-white' type="submit" value="Update"/>
              </form>
            </div>
    </div>
  )
}

export default Update;