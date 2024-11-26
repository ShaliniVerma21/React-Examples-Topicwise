import React from 'react'
import './CSS/Cards.css';
export default function Cards(props) {
    {/*Children and Parents Props */ }
    return (
        <>
            <div className='card'>
                <h2>{props.title}</h2>
                <div className='card-content'>
                {/* {props.children} */}
                    {React.Children.map(props.children, (child) => (
                        <div key={child.key}>{child}</div>
                    ))}
                </div>
            </div>
        </>
    );
}
