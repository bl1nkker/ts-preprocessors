import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import MemoryIcon from '@material-ui/icons/Memory';

interface Props {
    
}

export const Navbar = (props: Props) => {
    const [currentPath, setCurrentPath] = useState<string>('home')
    return (
        <ul className='navbar__container'>
            <li  className={`navbar__container-item ${currentPath === 'home' && 'active' }`}>
                <Link onClick={() => setCurrentPath('home')} to='/teacher/home'>
                    <HomeIcon className='item-icon'/>
                    <span>Home</span>
                </Link>
            </li>
            <li  className={`navbar__container-item ${currentPath === 'students' && 'active' }`}>
                <Link onClick={() => setCurrentPath('students')} to='/teacher/students'>
                    <SchoolIcon className='item-icon'/>
                    <span>My students</span>
                </Link>
            </li>
            <li  className={`navbar__container-item ${currentPath === 'articles' && 'active' }`}>
                <Link onClick={() => setCurrentPath('articles')} to='/teacher/articles'>
                    <MemoryIcon className='item-icon'/>
                    <span>My articles</span>
                </Link>
            </li>
        </ul>
    )
}
