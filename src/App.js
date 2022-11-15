
import './App.css';
import{userAdd,userRemove} from "../src/Redux/addUserSlice";
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import UserLists from './UserLists';
function App() {
  const dispatch = useDispatch();
  
  const [userDetails,setUserDetails] = useState({id:"", userDetails:""})


  const onsave=(e)=>{
    e.preventDefault();
    if(userDetails){
      dispatch(
        userAdd(
          {id:nanoid(),
            userDetails
          })
          );
          
    }
    setUserDetails({
      id: "",
      userDetails: "",
    })
  }
  return (
    <>
  <div className='App'>
    
      <input type="text" className='text' onChange={(e) => {setUserDetails(e.target.value)}} />
      <button className='btn' onClick={onsave}>ADD</button>
   
   
    <div className='line'></div>
    <UserLists />
    
   
    
  </div>
    </>
  );
}

export default App;
