import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import MyDetails from '../MyDetails/MyDetails';

import Player from '../Player/Player';
import Tostar from '../Tostar/Tostar';
import './Working.css'

const Working = () => {

    const [works, setWork] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);
    const [breakValue, setBreakValue] = useState(0);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWork(data))
    }, [])
    const handleAddToList = (work) => {
        // console.log(work);
        const newExerciseTime = [...exerciseTime, work];
        setExerciseTime(newExerciseTime)

    }
    let total = 0;
    for (const times of exerciseTime) {
        total = total + times.time;
    }

    const valueSetForBreak = (e) => {
        const value = e.currentTarget.value;
        setBreakValue(value)

    }





    return (
        <div className='working-data'>

            <div className='player-container'>
                {
                    works.map(work => <Player key={work.id} work={work} handleAddToList={handleAddToList} ></Player>)
                }
            </div>

            <div className='exercise'>
                <h1>About Myself</h1>
                <MyDetails></MyDetails>
                <Break valueSetForBreak={valueSetForBreak}></Break>
                <h3>Add a break</h3>

                <h1>Exercise Details</h1>

                <p>Exercise Time: {total}s </p>
                <p>Break Time: {breakValue} </p>
                <Tostar></Tostar>

            </div>

        </div>
    );
};

export default Working;