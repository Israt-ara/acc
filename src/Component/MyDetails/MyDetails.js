import React from 'react';
import './MyDetails.css'

const MyDetails = () => {
    return (
        <div>
            <div className='image'>
                <img src="israt.jpg" alt="" />
            </div>

            <p>Israt Ara</p>
            <p><small>Raipur,Lakshmipur</small></p>

            <div className='mydetails'>
                <p>
                    <li>49kg</li>
                    <li>Weight</li>
                </p>
                <p>
                    <li>5'1"</li>
                    <li>Height</li>
                </p>
                <p>
                    <li>25</li>
                    <li>Age</li>
                </p>
            </div>

        </div>
    );
};

export default MyDetails;