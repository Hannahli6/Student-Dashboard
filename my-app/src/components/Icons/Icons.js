import './Icons.css';
import { FaGoogleDrive } from 'react-icons/fa';
import { SiGooglecalendar } from 'react-icons/si';
import { SiGooglesheets } from 'react-icons/si';
import { SiGoogletranslate } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';

const Icons = () => {
    return ( 
        <div className='icons widgets'>
            <div className='icon-container'>
                <IconContext.Provider value={{size: '3em'}}>
                    <a href='https://drive.google.com/drive/my-drive' target={'_blank'} rel={'noreferrer'}><FaGoogleDrive className='react-icon' /></a>
                    <a href='https://calendar.google.com/calendar/u/0/r' target={'_blank'} rel={'noreferrer'}><SiGooglecalendar className='react-icon' /></a>
                    <a href='https://docs.google.com/spreadsheets/u/0/' target={'_blank'} rel={'noreferrer'}><SiGooglesheets className='react-icon' /></a>
                    <a href='https://translate.google.com/' target={'_blank'} rel={'noreferrer'}><SiGoogletranslate className='react-icon' /></a>
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default Icons;