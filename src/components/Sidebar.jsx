import React, { useEffect, useState } from 'react'
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
import arrow from '../assets/images/Arrow right.png'
import arrow2 from '../assets/images/Arrow right 3.png'

const Sidebar = ({ services, screen, setScreen }) => {

    const [side, setSide] = useState(true);
    const [index, setIndex] = useState(0);
    const [onService, setOnService] = useState(false);

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
        if (index === 2 || index > 7) {
            setOnService(true)
        } else {
            setOnService(false)
        }

        setScreen(index)
    }

    const select = (i, index) => {
        return i === 2 && index > 7;
    }

    return (
        <div className={`${side ? 'w-[25%]' : 'w-[4%] '} flex flex-col pt-16 h-full bg-[#1F2F3D] ease-in-out duration-500`}>
            <div className={`flex ${side ? 'p-5 justify-end' : 'py-5 justify-center'} w-full `}>
                <img onClick={handleSide} src={burger} className='self-end w-5 h-5 cursor-pointer' />
            </div>

            <div className='flex  h-full flex-col font-arimo font-bold items-center overflow-auto'>
                {items.map((items, i) => {
                    return (
                        <>
                            <div onClick={() => { handleClick(i) }} key={`${items}1#${i}`} className={`relative cursor-pointer flex flex-row items-center h-14 px-4 w-full text-white border-b gap-3 
                            ${(i === screen || select(i, screen)) && 'bg-[#FEC51C] border-[#1F2F3D]'} 
                            ${(i === screen - 1) && 'border-[#1F2F3D]'}`}>
                                <img className='w-5 h-5' src={(i === screen || select(i, screen)) ? items.selected : items.icon} alt={items.icon} />
                                {side && <h1 className={`${(i === screen || select(i, screen)) && 'text-[#1F2F3D]'}`}>{items.label}</h1>}
                                {(side && screen === i || select(i, screen)) && (<img src={triangle} className='absolute object-cover h-full right-0' />)}
                            </div>
                            {(side && onService && i === 2) && (<div key={`${items}2#${i}`} className='flex h-[200px] flex-col border-b transition-all ease-in-out duration-500 overflow-auto'>
                                {services['documents'].map((item, i) => {
                                    return (<div key={item.id} onClick={() => { handleClick(i + 8) }} className={`${i + 8 === screen ? 'bg-[#FEC51C]/80 text-[#1F2F3D]' : 'text-white'} relative w-full px-6 py-3 flex flex-row items-center gap-3 cursor-pointer`}>
                                        <img className='w-4 h-4' src={(i + 8 === screen) ? arrow2 : arrow} alt='icon' />
                                        <p className='text-sm'>{item.name}</p>
                                    </div>)
                                })}
                            </div>)}
                        </>)
                })}
            </div>
        </div>
    )
}

export default Sidebar