import React from 'react';
import bgImg from '../../../assets/images/bgImg.png';

const BgImg = ({className, ...props}) => {
   return (
      <div className={className}>
         <img src={bgImg} alt="" />
      </div>
   );
}


export default BgImg;