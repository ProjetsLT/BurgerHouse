import React from 'react';
import Logo from '../../../medias/svg/Logo-burger-house.svg';

export default function Header() {
  return (
    <div className="flex items-center justify-between py-10 bg-gray-500">
      <div className="bg-red-500 h-20 w-full">
        <img src={Logo} alt="burger-house" className="w-60" />
      </div>
      <div className="bg-white h-20 w-full">
        c'est le moment de goûter nos burger !
      </div>
    </div>
  );
}
