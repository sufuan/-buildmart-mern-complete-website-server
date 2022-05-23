import React from 'react';

const UserRow = ({user}) => {

    const {email}=user
    console.log(email);
    return (
        <div>
            <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
            </tr>
        </div>
    );
};

export default UserRow;