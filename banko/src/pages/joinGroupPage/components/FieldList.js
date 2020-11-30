import React from 'react'

import styles from './FieldList.module.css'
import InputField from './InputField'
import InputButton from './InputButton'

function FieldList()
{
    
    return(
        <ul className={styles}>
            <li>Join Group</li>
            <li><input 
                    type="text" 
                    name="GroupName" 
                    placeholder="Enter Group Name"
                /></li>
            <li><InputButton text="Submit"/></li>
        </ul> 
    );
}

export default FieldList