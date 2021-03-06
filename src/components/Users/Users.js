import React from 'react';
import style from './Users.module.css';
import {NavLink} from "react-router-dom";

const Users = props => {
    let pageCount = props.usersCountFromServer / props.countUsersOnCurrentPage;
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && style.selectedPage}>{p}</span>
                })}
            </div>
            {props.users.map(u => {
                return (<div>
                    <span>
                        <div>
                            <NavLink to={"/profile/"+u.id}>
                                <img src={u.photos.small===null?"https://st2.depositphotos.com/1531183/5770/v/450/depositphotos_57709697-stock-illustration-male-person-silhouette-profile-picture.jpg":u.photos.small}/>
                            </NavLink>
                        </div>
                        <div> <button disabled={props.followingInProgress.some(id=>id===u.id)}
                            onClick={u.followed ? () => props.onUnfollow(u.id) : () => props.onFollow(u.id)}>{u.followed ? 'UNFOLLOW' : 'FOLLOW'}</button></div>
                        <div>
                             <div>Id: {u.id}</div>
                            <div>Full Name: {u.name}</div>
                               <div>Status: {u.status}</div>
                        </div>
                    </span>

                    </div>
                )
            })}
        </div>
    )
}

export default Users

