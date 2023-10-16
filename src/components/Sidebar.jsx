import React, { useState } from 'react'
import burger from '../assets/images/Community Logo (11).png'
import home from '../assets/images/s.png'
import home2 from '../assets/images/6.png'
import about from '../assets/images/d.png'
import about2 from '../assets/images/7.png'
import flag from '../assets/images/Community Logo (13).png'
import flag2 from '../assets/images/Community Logo (10).png'
import hands from '../assets/images/f.png'
import hands2 from '../assets/images/8.png'
import call from '../assets/images/g.png'
import call2 from '../assets/images/10.png'
import triangle from '../assets/images/triangle.png'

const Sidebar = (props) => {

    const [side, setSide] = useState(true);
    const [index, setIndex] = useState(0);

    const items = [
        { label: "Dashboard", icon: home, selected: home2 },
        { label: "Citizen's Charter", icon: flag, selected: flag2 },
        { label: "Services", icon: hands, selected: hands2 },
        { label: "About Us", icon: about, selected: about2 },
        { label: "Contact Us", icon: call, selected: call2 }
    ]

    const handleSide = () => {
        setSide(!side)
    }

    const handleClick = (index) => {
        setIndex(index)
        props.setScreen(index)
    }

    return (
        <div className={`${side ? 'w-[20%]' : 'w-[4%] '} flex flex-col pt-16 h-full bg-[#1F2F3D] ease-out duration-500`}>
            <div className={`flex ${side ? 'p-5 justify-end' : 'py-5 justify-center'} w-full `}>
                <img onClick={handleSide} src={burger} className='self-end w-5 h-5 cursor-pointer' />
            </div>

            <div className='grid grid-rows-5 font-arimo font-bold items-center'>
                {items.map((items, i) => {
                    return (
                        <div onClick={() => { handleClick(i) }} key={items} className={`relative flex flex-row items-center h-14 px-4 w-full text-white border-b gap-3 ${(i === index)
                            && 'bg-[#FEC51C] border-[#1F2F3D]'} ${(i === index - 1) && 'border-[#1F2F3D]'}`}>
                            <img className='w-5 h-5' src={i === index ? items.selected : items.icon} alt={items.icon} />
                            {side && <h1 className={`${i === index && 'text-[#1F2F3D]'}`}>{items.label}</h1>}
                            {(side && index === i) && (<img src={triangle} className='absolute object-cover h-full right-0' />)}
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Sidebar