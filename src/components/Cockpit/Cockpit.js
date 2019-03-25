import React, { useEffect, memo, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    
    useEffect(() =>{
      console.log('[Cockpit.js] useEffect');
      toggleBtnRef.current.click();

      const timeout = setTimeout(() => {
        // alert('Saved data to cloud');
      }, 1000)
      return () => {
        clearTimeout(timeout);
        console.log('[Cocpit.js] cleanup work in useEffect')
      }
    }, [])
    const assignedClasses = [];

    let btnClass = '';
    if (props.showPersons)
        btnClass = classes.red;

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.login}>Switch Name</button>
        </div>
    );
}

export default React.memo(cockpit);