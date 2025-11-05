import React from 'react'
import { Home, Plane, Map, NotebookPen, Hotel } from 'lucide-react'
import {useNavigate} from "react-router-dom";
import { useWidth } from './useWidth';
import clsx from 'clsx';
function SideBar() {
  const navigate = useNavigate();
  const width = useWidth();
console.log(width);
  
  const buttonClass = clsx(
    'rounded-full',

      width < 768 && "border-3 px-3 py-3 hover:border-red-800",
    width >= 768 && "border-2 px-2 py-2 hover:border-red-800",
     width >= 1024 && "border-1 px-1 py-1 hover:border-red-800",
    
  );

  return (
    <div className='flex flex-col items-center gap-20'>
  

        <div className={buttonClass} onClick={() => navigate('/home/airplane')}>

               <Plane />
        </div>
        <div className={buttonClass}  onClick={() => navigate('/home/map')}>
      <Map />
      </div>
      <div className='rounded-full border-3 px-3 py-3 hover:border-red-800' onClick={() => navigate('/home/notebookpen')}>
      <NotebookPen />
      </div>
      <div className='rounded-full border-3 px-3 py-3 hover:border-red-800' onClick={() => navigate('/home/hotel')}>
       <Hotel />
      </div>
    </div>
  )
}
export default SideBar;

