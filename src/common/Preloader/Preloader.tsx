import React from 'react';
// @ts-ignore
import prealoder from '../../components/img/preloader.svg';

const Preloader = () => {
    return (
        <div>
            <img src={prealoder}
                 alt="preloader"/>
        </div>
    )
};

export default Preloader;