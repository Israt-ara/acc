import React from 'react';

import './Player.css'

const Player = (props) => {
    // console.log(props.work);
    const { work, handleAddToList } = props;
    const { name, picture, time } = work;
    // 
    // console.log(props)
    // const handleAddToList = () => {
    //     console.log('hello')
    // }
    return (
        <div className='playing'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Time:{time}s</p>
            <div>
                <button onClick={() => handleAddToList(work)} className='btn-add-to-list'>Add To List</button>

            </div>


        </div>
    );
};

export default Player;