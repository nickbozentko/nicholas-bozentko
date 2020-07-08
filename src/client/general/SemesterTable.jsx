import React from 'react';

const SemesterTable = props => {
    let {
        title,
        classes
    } = props;

    let rowStyle = {
        textAlign: 'left',
        display: 'grid',
        gridTemplateColumns: '2fr 5fr 1fr'
    }

    let cellStyle = {
        padding: '2px'
    }

    let rows = classes.map((c, idx) => 
        <tr 
            key={c.tag} 
            className="semester-tr" 
            style={{ 
                ...rowStyle,
                backgroundColor: idx % 2 === 0 ? '#dcdcdc' : '#d3d3d3' 
            }}
        >
            <td style={cellStyle}>{c.tag}</td>
            <td style={cellStyle}>{c.name}</td>
            <td style={cellStyle}>{c.grade}</td>
        </tr>
    )

    return(
        <table className="semester-table table">
            <thead>
                <tr 
                    className="semester-name"
                    style={{ 
                        backgroundColor: '#8A2432',
                        color: 'white'
                    }}
                >
                    <th 
                        colSpan="3" 
                        style={{ textAlign: 'center' }}
                    >
                        {title}
                    </th>
                </tr>
                <tr 
                    className="semester-col-names" 
                    style={{ 
                        ...rowStyle,
                        backgroundColor: '#BBBBBB'
                    }}
                >
                    <th style={{...cellStyle }}>Tag</th>
                    <th style={{...cellStyle }}>Name</th>
                    <th style={{...cellStyle }}>Grade</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default SemesterTable;