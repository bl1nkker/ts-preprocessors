import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import MemoryIcon from '@material-ui/icons/Memory';

interface Props {
    
}

export const Navbar = (props: Props) => {
    return (
        <ul className='navbar__container'>
            <li className={`navbar__container-item active`}>
                <Link to='/teacher/home'>
                    <HomeIcon className='item-icon'/>
                    <span>Home</span>
                </Link>
            </li>
            <li className={`navbar__container-item`}>
                <Link to='/teacher/students'>
                    <SchoolIcon className='item-icon'/>
                    <span>My students</span>
                </Link>
            </li>
            <li className={`navbar__container-item`}>
                <Link to='/teacher/articles'>
                    <MemoryIcon className='item-icon'/>
                    <span>My articles</span>
                </Link>
            </li>
        </ul>
    )
}
