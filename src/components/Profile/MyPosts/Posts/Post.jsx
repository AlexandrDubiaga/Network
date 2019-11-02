import React from 'react';
import style from './Post.module.css';


const Post = props => {
    return (
        <div className={style.item}>
            <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6aad8756-7569-48be-b4ac-b26dfefd951e/d2x5mn9-bb94efa7-2530-45e6-bbc9-99760a470d21.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZhYWQ4NzU2LTc1NjktNDhiZS1iNGFjLWIyNmRmZWZkOTUxZVwvZDJ4NW1uOS1iYjk0ZWZhNy0yNTMwLTQ1ZTYtYmJjOS05OTc2MGE0NzBkMjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f_nxE7APPnoys_CNeNvuEiGqARBOwvuyT00UCjc0nr4"/>
            Post 1
            <div>
                <span>like</span>
            </div>

        </div>
    );
}

export default Post;
