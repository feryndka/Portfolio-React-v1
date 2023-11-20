import { useState } from 'react';
import './Navbar.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [isDensityIconVisible, setDensityIconVisible] = useState(true);

    const handleIconClick = () => {
        setDensityIconVisible(!isDensityIconVisible);
    };

    return (
        <>
            <div id="header">
                <div className="logo">
                    <img src="https://capp.nicepage.com/6f6a31d72c128ffa08e6bfb220a4af5fa663926a/images/default-logo.png" alt="" />
                </div>
                
                <ul className={!isDensityIconVisible ? '' : 'visible'}>
                    <div onClick={handleIconClick}><CloseIcon /></div>
                    <li><a href="#">Home</a></li>
                    <li><a href="#Profile">Profile</a></li>
                    <li><a href="#ABOUT">About</a></li>
                    <li><a href="#CAPABILITIES">Capabilities</a></li>
                </ul>

                <div className='icon' onClick={handleIconClick}>
                    <DensityMediumIcon />
                </div>
            </div>
        </>
    )
}