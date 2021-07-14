import React from 'react'

interface Props {
    
}

export const NewsCardArticle = (props: Props) => {
    return (
        <div className='news__article'>
            <div className='news__article-avatar'>
                <img src="https://www.kindpng.com/picc/m/236-2362818_anime-sempai-animegirl-heart-kawaii-cute-anime-girl.png" alt="kawaii" />
            </div>
            <div className='news__article-info'>
                <span className='title'>We need More gold</span>
                <div className='additional-info'>
                    <span>by Editor228</span>
                    <span>at 21 Sept. 2019</span>
                </div>
            </div>
        </div>
    )
}
