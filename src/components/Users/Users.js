import React from 'react';
import style from './Users.module.css';

const Users = props => {
    return (
        <div>
            {props.users.map(u => {
                return (<div>
                    <span>
                        <div>
                        <img src={"https://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg"}/>
                        </div>
                        <div> <button onClick={u.followed ? () => props.unfollowAC(u.id) : () => props.followAC(u.id)}>{u.followed ? 'UNFOLLOW' : 'FOLLOW'}</button></div>
                        <div>
                            <div>Full Name: {u.fullName}</div>
                               <div>Status: {u.status}</div>
                             <div>Country: {u.location.country}</div>
                               <div>City: {u.location.city}</div>
                        </div>
                    </span>

                    </div>
                )
            })}
        </div>
    )
}

export default Users

