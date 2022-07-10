import React from "react";
import Gold from "../components/seats/Gold";
import Silver from "../components/seats/Silver";
import Platinum from "../components/seats/Platinum";
import Business from "../components/seats/Business";
import { useParams } from "react-router-dom";
const SelectingSeat = () => {
  const { time } = useParams();
  return (
    <>
      <div className='selectingSeatMovieDetails'>Time Selected - {time}</div>
      <div className='selectingSeatContainer'>
        <div className='selectingSeat'>
          <div className='selectingseatBusiness'>
            <div className='selectingGroup'>
              Business - ₹500 <hr className='titleLine' />
            </div>
            <Business />
          </div>
          <div className='selectingseatPlatinum'>
            <div className='selectingGroup'>
              Platinum - ₹350 <hr className='titleLine' />
            </div>
            <Platinum />
          </div>
          <div className='selectingseatGold'>
            <div className='selectingGroup'>
              Gold - ₹200 <hr className='titleLine' />
            </div>
            <Gold />
          </div>
          <div className='selectingseatSilver'>
            <div className='selectingGroup'>
              Silver - ₹100 <hr className='titleLine' />
            </div>
            <Silver />
          </div>
          <div className='selectingseatScreen'>All eye this way please</div>
          <hr className='screen' />
        </div>
      </div>
      <div className='totalPrice'>
        <button className='priceBtn'>Pay Now - ₹100</button>
      </div>
    </>
  );
};

export default SelectingSeat;
