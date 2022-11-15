import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRemove } from './Redux/addUserSlice';

const UserLists = () => {
  const data = useSelector((state)=>state.users.value);
  const dispatch = useDispatch();

  const renderedUsers = data.map((user)=>(
    <div className='boxes' key={user.id}>
    <div className='box'><p>{user.userDetails}</p></div>
    <button className='btn-remove' onClick={()=>{dispatch(userRemove({id:user.id}))}}>Remove</button>
    </div>
  ))
    return (
    <div>
        {renderedUsers}
    </div>
  )
}

export default UserLists
