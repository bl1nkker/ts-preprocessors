import React from 'react'

interface Props{
    appName: string
}

const Header:React.FC<Props> = ({ appName }) => {
    return (
        <div>
            <h1>{appName}</h1>
            <span>About</span>
            <span>Contacts</span>
        </div>
    )
}

export default Header
