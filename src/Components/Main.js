
import './Main.css';
// import img1 from './Image/portfolioImage.jpeg';
import {BiSolidHome} from 'react-icons/bi';
import {BsFillPersonFill} from 'react-icons/bs';
import {BiSolidBriefcase} from 'react-icons/bi';
import {IoMdMailOpen} from 'react-icons/io';
export default function Main(){
    return(
        <div>
            <div className="Main-Class-Container">
                <div className='Main-Class-left'>
                    <div className='h-shape'></div>
                    <div className='image'>
                        <img src='./Image/portfolioImage.jpeg' alt="image" />
                    </div>
                </div>
                <div className='Main-Class-right'>
                    <h1 className='name'>
                        Hi, I'm  
                        <span> Suchethan Reddy Karra</span>
                    </h1>
                    <p>I am a 4rth year student studying Computer Science at BVRIT, Narsapur. I want to pursue a career in Software Development and Computer Science.</p>
                    <a href='https://drive.google.com/file/d/11ibLYzCAf33-ur439WlSP0X_jrfOVmRT/view?usp=sharing' className='btn btn-green' target='_blank'>Download CV</a>
                </div>
                
            </div>
           
        </div>

    );
}