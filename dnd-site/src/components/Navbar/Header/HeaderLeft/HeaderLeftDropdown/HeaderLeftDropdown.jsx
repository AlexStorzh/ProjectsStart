import React from 'react';
import DropDownItem from './DropDownItem/DropDownItem';
import './HeaderLeftDropdown.css'

const HeaderLeftDropdownPopover = () => {
 return (
  <div className='dropdown_popover'>
   <div className="popover_header">
    <div className='popover_header_info'>
    <div className='popover_header_info title'>Encylopede for DnD redaction 5</div>
    <div className='popover_header_info text'>MENU</div>

    </div>
   </div>
   <DropDownItem name ='Classes'/>
   <DropDownItem name ='History'/>
   <DropDownItem name ='Weapons'/>
   <DropDownItem name ='Armor'/>
  </div>
 );
};

export default HeaderLeftDropdownPopover;