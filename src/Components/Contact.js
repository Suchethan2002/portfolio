import {IoLocationSharp} from 'react-icons/io5' 
import {IoMailSharp} from 'react-icons/io5'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

export default function Contact()
{
    return(
        <div className='Container-contact'>
            <div className="Main-title">
                <div className="Main-title-header">
                    <h2>
                    CONTACT 
                    <span> ME</span>
                    <span className="Span-Style"></span>
                    </h2> 
                </div>
                <div className='Contact-details-Main'>
                        <div className='Contact-details'>
                            <div className='Contact-in'>
                                <IoLocationSharp style={{fontSize: '25px',cursor:'pointer'}}/>
                                <h4>Hyderabad, India</h4>
                            </div>
                         <div className='Contact-in'>
                                 <IoMailSharp style={{fontSize: '25px',cursor:'pointer'}}/>
                                <h4>suchethanreddyk@gmail.com</h4>
                            </div> 
                            <div className='Contact-icon-main'>
                                
                                 <a href='https://github.com/Suchethan2002'
                                 className='Contact-icon' target='_blank'> <AiFillGithub style={{fontSize: '30px',cursor:'pointer'}}/></a>

                                <a href='https://www.linkedin.com/in/suchethan-reddy-karra-9a0962214/'
                                 className='Contact-icon' target='_blank'> <BsLinkedin style={{fontSize: '30px',cursor:'pointer'}}/></a>
                                

                            </div>
                        </div>
                </div>
               
            </div>
        </div>
    
)
}
