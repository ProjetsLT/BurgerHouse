import React from 'react';
import Logo from '../../../medias/svg/Logo-burger-house.svg';
import Icone from '../../../medias/svg/ico-bag-clickAndCollect.svg';
import Button from '../../elements/Button';

export default function Header() {
  return (
    <div className="flex items-center justify-between py-10">
      <div className="w-full">
        <img src={Logo} alt="burger-house" className="w-60" />
      </div>
      <div className="w-full text-secondary">

        <div className='flex items-center justify-end'>
          <img src={Icone} alt="" className='w-5 h-5 mr-1'/>
          <span>Commander votre repas en ligne</span>
        </div>

        <div>
          <Button />
        </div>

      </div>

    </div>
  );
}
