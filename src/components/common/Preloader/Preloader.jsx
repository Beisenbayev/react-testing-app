import React from 'react';
import preloader from '../../../assets/preloader.svg';

const Preloader = ({className, ...props}) => {
   return (
      <div className={className}>
         <img src={preloader} alt="" />
      </div>
   );
}


export default Preloader;