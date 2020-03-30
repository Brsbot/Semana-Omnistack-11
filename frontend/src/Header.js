import React from 'react';

function header(props){
    return(
        <header>
            <h1>Be The Hero</h1>
            <h2>{props.children}</h2>
        </header>
    );
};

export default header;