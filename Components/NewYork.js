import React from 'react'

function NewYork(props) {
    const Url=props.url;
    console.log(Url);
    return (
        <div>
             Read more on &nbsp;
            <a href={Url} target="_blank" rel="noreferrer">
              New York Times
            </a>
        </div>
    )
}

export default NewYork
