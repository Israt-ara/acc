import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-value'>
                <h3>How Does React Work?</h3>
                <p>Answer:React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>

                <h3>Difference between props and state:</h3>
                <p>
                    <b>props: </b>Props are read-only. 	Props are immutable.Props allow you to pass data from one component to other components as an argument.<br />
                    <b>state: </b>State changes can be asynchronous.State is mutable.State holds information about the components.

                </p>

                <h3>Usages of useEffect </h3>
                <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API..Side Effect Runs Every Render.It is cleanup.</p>
                <p>It runs only ater initial render.It runs after state value change</p>

            </div>
        </div>
    );
};

export default Footer;