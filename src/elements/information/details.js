import React from 'react';


export function Details(props) {
    return (
        <>
            <div className="details">
                <div className="keywords">
                    {props.item.keywords}
                </div>
                <ul>
                    <li>Number of bathrooms: {props.item.bathroom_number}</li>
                    <li>Number of bedrooms: {props.item.bedroom_number}</li>
                </ul>
                <div className="lister">
                    <p>Go to <a href={props.item.lister_url}>rent web page</a></p>
                </div>
            </div>
            <div>
                {props.item.summary}
            </div>
        </>
    )
}