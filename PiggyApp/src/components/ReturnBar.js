import React from 'react';
import { Link } from 'react-router-dom';
// import NavBar from '../css/NavBar'

const ReturnBar = ({ title, pathname }) => {
    return (
        <div className='backBar' style={{ position: 'relative' }} >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', paddingTop: '4px', paddingLeft: '10px'}}>
                <Link style={{ color: "#F3F3F3" }} to={{ pathname: pathname }}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>
            </div>
            <div>
                
                <div style={{textAlign:'center'}}>
                    <label className='backText'>{title}</label>
                </div>
            </div>
        </div>
    );
}

export default ReturnBar;