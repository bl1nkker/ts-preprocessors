import React from 'react'

interface Props{
    appName: string
}

const Header:React.FC<Props> = ({ appName }) => {
    return (
        <header>
            <h1>{appName}</h1>
            <ul className='nav-items'>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </header>
    )
}

export default Header
