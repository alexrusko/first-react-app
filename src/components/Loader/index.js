import React from 'react';
import loaderGif from './loader.gif';

const Loader = props => (
    <div>
        <img 
            style={{width: 200}}
            src={loaderGif}
            alt="loader icon "/>
    </div>
);

export default Loader;