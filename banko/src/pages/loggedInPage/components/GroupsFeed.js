import React from 'react';

import styles from './GroupsFeed.module.css';
import JoinCreateGroup from './JoinCreateGroup';
import Group from './Group';

function GroupsFeed() {

    const groups = new Array();

    //write java for this
    useEffect(() => {
        $.ajax({
            contentType: "application/json;charset=utf-8",
            url: 'http://localhost:8080/getGroups',
            type: 'get',
            dataType: 'json',
            data: { user_id: context.user_id },
            success: function (data) {

                var i = 0;

                $.each(data, function (key) {

                    groups[i] = key;
                    i++;

                });

            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }

        });
    })
    return (
        <div className={styles.GroupsFeed}>
            <JoinCreateGroup />

            <div className={styles.Groups}>
                {groups.map(group => (
                    <Group name={group[0]} user={group[1]} />
                ))}
            </div>
        </div>
    )
}

export default GroupsFeed;