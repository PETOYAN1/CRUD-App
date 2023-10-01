import { createSlice } from '@reduxjs/toolkit';
import { userList } from '../Components/data';

const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const {id, name, position, office, age} = action.payload;
            const uu = state.find(user => user.id == id);
            if (uu) {
                uu.name = name,
                uu.position = position,
                uu.office = office,
                uu.age = age
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const uu = state.find((user) => user.id == id);
            if (uu) {
                return state.filter((user) => user.id !== id);
            }
        }
    }
});

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;