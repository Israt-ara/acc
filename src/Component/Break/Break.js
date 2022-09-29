import React from 'react';
import './Break.css'

const Break = (props) => {

    const { valueSetForBreak } = props;



    return (
        <div>
            <h3>Add a break</h3>
            <div>
                <button onClick={valueSetForBreak} value='10' className='btn-break'>10s</button>
                <button onClick={valueSetForBreak} value='20' className='btn-break'>20s</button>
                <button onClick={valueSetForBreak} value='30' className='btn-break'>30s</button>
                <button onClick={valueSetForBreak} value='40' className='btn-break'>40s</button>
            </div>
        </div>
    );
};

export default Break;