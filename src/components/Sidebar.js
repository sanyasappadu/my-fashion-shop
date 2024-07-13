import React from 'react';

function Sidebar() {
  return (
    <div className='flex flex-col ml-10 '>
      <div><h1>EXPLORE</h1></div>
      <div className='flex flex-col height-400 justify-between '>
        <div>New In</div>
        <div>Clothes</div>
        <div>Shoes</div>
        <div>Accessories</div>
        <div>Activewear</div>
        <div>Gifts & LIVING</div>
        <div>Inspiration</div>
      </div>
    </div>
  );
}

export default Sidebar;
