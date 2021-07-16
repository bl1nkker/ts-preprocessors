import React from 'react'
import StarIcon from '@material-ui/icons/Star';

interface Props {
    
}

export const NewsCardStudent = (props: Props) => {
    return (
        <div className='news__student'>
            <div className='news__student-avatar'>
                <img src="https://www.kindpng.com/picc/m/236-2362818_anime-sempai-animegirl-heart-kawaii-cute-anime-girl.png" alt="kawaii" />
            </div>
            <div className='news__student-info'>
                <span className='name'>Mariya</span>
                <div className='stars'>
                    <StarIcon className='star' fontSize='small' />
                    <StarIcon className='star' fontSize='small' />
                    <StarIcon className='star' fontSize='small' />
                    <StarIcon className='star' fontSize='small' />
                    <StarIcon className='star' fontSize='small' />
                </div>
            </div>
        </div>
    )
}
