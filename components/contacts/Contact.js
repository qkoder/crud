import React from "react";
import Avatar from "react-avatar";

const Contact = ({ abc }) => {
    const { id, name, phone, email } = abc;
    return (
        <>
            <tr key={id}>
                <th>
                    <div className="custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                        />
                        <label className="custom-control-label"></label>
                    </div>
                </th>
                <td>
                    <Avatar name={name} size="45" round={true} /> {name}
                </td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                    <i class="material-icons">edit</i>
                    <i class="material-icons">remove_circle</i>
                </td>
            </tr>
        </>
    );
};

export default Contact;