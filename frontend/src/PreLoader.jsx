import React from 'react';
import './PreLoader.css';

const PreLoader = ({ loaderRef }) => {
    return (
        <>
            <div ref={loaderRef} id="loader">
                <div id="shadow" />
                <div id="box" />
            </div>
        </>
    );
}

export default PreLoader;