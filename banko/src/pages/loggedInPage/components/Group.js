import React, { useEffect, useState } from 'react';

import $ from 'jquery';
import styles from './Group.module.css';

/*
    Im going to need some clarification here. You want users from where? Users in the
    same group? If so then we need to make an ajax call in a useEffect to get that
    information. 
*/
function Group(props) {

    const [users, setUsers] = useState("");

    useEffect(() => {
        $.ajax({
            contentType: "application/json;charset=utf-8",
            url: 'http://localhost:8080/getGroups',
            type: 'get',
            dataType: 'json',
            data: { group_id: props.group_id },
            success: function (data) {

                var i = 0;

                $.each(data, function (key) {

                    users[i] = key;
                    i++;

                });

            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }

        });
    })

    return (
        <div className={styles.Group}>

            <h2>{props.group_name}</h2>

            {users.map(user => (
                <p>User: {user}</p>
            ))}

        </div>
    )
}

/* old code
    return (
        <div className={styles.Group}>

            <h2>{props.name}</h2>

            {props.users.map(user => (
                <p>User {user}</p>
            ))}

        </div>
    )
*/

export default Group;