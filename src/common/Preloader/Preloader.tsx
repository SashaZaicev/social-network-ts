import React from 'react';
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