import React from 'react';

import '../App.css';

const SemesterTable = props => {
    let {
        title,
        classes
    } = props;

    let rows = classes.map((c, idx) => 
        <tr 
            key={c.tag} 
            className="semester-tr" 
            style={{ 
                backgroundColor: idx % 2 === 0 ? '#dcdcdc' : '#d3d3d3' 
            }}
        >
            <td>{c.tag}</td>
            <td>{c.name}</td>
            <td>{c.grade}</td>
        </tr>
    )

    return(
        <table className="semester-table">
            <thead>
                <tr className="semester-name">
                    <th 
                        colSpan="3" 
                        style={{ textAlign: 'center' }}
                    >
                        {title}
                    </th>
                </tr>
                <tr className="semester-col-names" style={{ textAlign: 'left' }}>
                    <th>Tag</th>
                    <th>Name</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default SemesterTable;