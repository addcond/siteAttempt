import React from 'react';

export function Details(props) {

    const {item} = props;
    const {keywords, bathroom_number, bedroom_number, lister_url, summary, updated_in_days} = item;

    return (
        <>
            <div className='details'>
                <div className='keywords'>
                    {keywords}
                </div>
                <ul>
                    <li>Number of bathrooms: {bathroom_number || 'none'}</li>
                    <li>Number of bedrooms: {bedroom_number || 'none'}</li>
                    <li>Last update in days: {updated_in_days || 'today'}</li>
                </ul>
                <div className='lister' >
                    <p><a href={lister_url}>Go to rent web page</a></p>
                </div>
            </div>
            <div>
                {summary}
            </div>
        </>
    )
}