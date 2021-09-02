import React from 'react';
import style from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
    props.setUsers([
        {
        id: 1,
        photoUrl: 'http://kartik.ru/wp-content/uploads/2017/04/raspechatat-malenkie-kartinki-dlya-lichnogo-dnevnika-119725.jpg',
        followed: true,
        fullName: 'Sapsan',
        status: "i'm first",
        location: {city: 'Minsk', country: 'Belarus'}
    },
        {
            id: 2,
            photoUrl: 'http://kartik.ru/wp-content/uploads/2017/04/raspechatat-malenkie-kartinki-dlya-lichnogo-dnevnika-119725.jpg',
            followed: false,
            fullName: 'Izikil',
            status: "i'm first",
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'http://kartik.ru/wp-content/uploads/2017/04/raspechatat-malenkie-kartinki-dlya-lichnogo-dnevnika-119725.jpg',
            followed: true,
            fullName: 'Gregori',
            status: "i'm first",
            location: {city: 'Viln', country: 'Ukraina'}
        },
        {
            id: 4,
            photoUrl: 'http://kartik.ru/wp-content/uploads/2017/04/raspechatat-malenkie-kartinki-dlya-lichnogo-dnevnika-119725.jpg',
            followed: false,
            fullName: 'Lelweyn',
            status: "i'm first",
            location: {city: 'Shtut', country: 'Germany'}
        },])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}> unFollow </button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;

