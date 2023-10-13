import { useState } from 'react';
import './Main.css';
import { BiSolidHome } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { SlGraph } from 'react-icons/sl';
import {IoMdMailOpen} from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Controls() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            <div className='controls'>
                <Link to='/'>
                    <div className={`control ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
                        <BiSolidHome style={{ fontSize: '25px', cursor: 'pointer' }} />
                    </div>
                </Link>
                <Link to='/About'>
                    <div className={`control ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                        <BsFillPersonFill style={{ fontSize: '25px', cursor: 'pointer' }} />
                    </div>
                </Link>
                <Link to='/Experience'>
                    <div className={`control ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                        <SlGraph style={{ fontSize: '25px', cursor: 'pointer' }} />
                    </div>
                </Link>
                <Link to='/Contact'>
                    <div className={`control ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                        <IoMdMailOpen style={{ fontSize: '25px', cursor: 'pointer' }} />
                    </div>
                </Link>
            </div>
        </div>
    );
}
