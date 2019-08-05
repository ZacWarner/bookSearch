import React from 'react';

function CardContainer(props) {
    return (
        <div className="card">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default CardContainer;