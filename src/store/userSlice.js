import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid"

const userSLice = createSlice({
    name:"users",
    initialState:{
         users : [
            {
              id: 1,
              name: "Rahul Kumar",
              email: "rahul@gmail.com",
              phone: "7676767676",
              img:""
            },
            {
              id: 2,
              name: "Priya Kumari",
              email: "priya@gmail.com",
              phone: "8888888888",
            },
            {
              id: 3,
              name: "Kunal Verma",
              email: "kunal@gmail.com",
              phone: "9898989898",
            },
            {
              id: 4,
              name: "Rekha Sharma",
              email: "rekha@gmail.com",
              phone: "8989898989",
            },
          ],
          user: {
            name:"",
            email:"",
            phone:""
          }
    },
    reducers: {
        getUser: (state,action) => {
            state.user = state.users.find((user) => user.id == action.payload)
        },
        addUser: (state,action) => {
            const newData = {...action.payload, id:uuidv4()};
            state.users = [newData, ...state.users]
        },
        deleteUser: (state,action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        },
        updateUser: (state,action) => {
            state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user)
        },
        
      
    }
})

export const {addUser, deleteUser,updateUser, getUser} = userSLice.actions;
export default userSLice.reducer;