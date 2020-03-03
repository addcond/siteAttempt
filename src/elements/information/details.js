import React from 'react';


export function Details(props) {

    const {item} = props;
    const {keywords, bathroom_number, bedroom_number, lister_url, summary} = item;
    return (
        <>
            <div className="details">
                <div className="keywords">
                    {keywords}
                </div>
                <ul>
                    <li>Number of bathrooms: {bathroom_number}</li>
                    <li>Number of bedrooms: {bedroom_number}</li>
                </ul>
                <div className="lister">
                    <p>Go to <a href={lister_url}>rent web page</a></p>
                </div>
            </div>
            <div>
                {summary}
            </div>
        </>
    )
}