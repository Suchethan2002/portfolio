
import './Main.css';
// import img1 from './Image/portfolioImage.jpeg';
import {BiSolidHome} from 'react-icons/bi';
import {BsFillPersonFill} from 'react-icons/bs';
import {BiSolidBriefcase} from 'react-icons/bi';
import {MdOutlineContactMail} from 'react-icons/md';
import {SlGraph} from 'react-icons/sl';
import { Link } from 'react-router-dom';
export default function Controls(){
    return(
        <div>
            <div className='controls'>
                <Link to='/'>
                    <div className='control'>
                        <BiSolidHome style={{ fontSize: '25px',cursor:'pointer'}}/>
                    </div>
                </Link> 
                <Link to='/About'>
                    <div className='control'>
                        <BsFillPersonFill style={{ fontSize: '25px',cursor:'pointer'}}/>   
                    </div> 
                </Link>
                <Link to='/Portfolio'> 
                    <div className='control'>              
                        <BiSolidBriefcase style={{fontSize:'25px',cursor:'pointer'}}/>    
                    </div>
                </Link>
                <Link to='/Experience'>
                    <div className='control'>
                        <SlGraph  style={{fontSize:'25px', cursor:'pointer'}}/>
                    </div>
                </Link>
                   
                <Link to='/Contact'>
                    <div className='control'>
                        <MdOutlineContactMail style={{fontSize:'25px', cursor:'pointer'}}/>
                    </div>
                </Link>
                
            </div>
        </div>

    );
}