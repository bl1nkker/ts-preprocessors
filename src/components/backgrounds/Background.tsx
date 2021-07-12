import React from 'react'

interface Props {
    
}

export const Background = (props: Props) => {
    return (
        <div className='app__background'>
            <section className='app__background-circle circle-1'></section>
            <section className='app__background-circle circle-2'></section>
            <section className='app__background-circle circle-3'></section>
            <section className='app__background-circle circle-4'></section>
        </div>
    )
}
