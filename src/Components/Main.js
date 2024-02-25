
import './Main.css';
// import img1 from './Image/portfolioImage.jpeg';
// import {BiSolidHome} from 'react-icons/bi';
// import {BsFillPersonFill} from 'react-icons/bs';
// import {BiSolidBriefcase} from 'react-icons/bi';
// import {IoMdMailOpen} from 'react-icons/io';
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
                    <p>I'm a final year student at B V Raju Institute of Technology. A newcomer in the realm of software development, eager to embark on this dynamic journey. My curiosity and passion for experimenting drive me to explore the latest technologies and push boundaries.</p>
                    <a href='https://drive.google.com/file/d/1vhnKP-YiXQuRPLzGo_Bp5d65BwVJ28tt/view?usp=sharing' className='btn btn-green' target='_blank'>Download CV</a>
                </div>
                
            </div>
           
        </div>

    );
}