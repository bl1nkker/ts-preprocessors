import React from 'react'
import { NewsCardArticle } from './NewsCardArticle'
import { NewsCardStudent } from './NewsCardStudent'

interface Props {
    
}

export const TeacherHome = (props: Props) => {
    return (
            <div className='teacher__container'>

                <section className='page__title'>
                    <h3>Home</h3>
                </section>

                <section className='page__content'>
                    <div className='statistic__container'>
                        <div className='title'>
                            <p className='short-phrase'>GREAT, <span className='username'>Арлан</span></p>
                            <p className='long-phrase'>you do your best!</p>
                        </div>
                        <div className='statistic'>
                            <p>Here is your statistic:</p>
                            <ul>
                                <li>Average GPA: <span>3.76</span></li>
                                <li>Total Articles: <span>13</span></li>
                                <li>Overall Respect: <span>1432</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='news__container'>
                        <section className='news__students'>
                            <h3 className='news__title'>My Students</h3>
                            <ul className='news__items'>
                                {/* Max: 3 students */}
                                <NewsCardStudent />
                                <NewsCardStudent />
                                <NewsCardStudent />
                            </ul>
                        </section>

                        <section className='news__articles'>
                            <h3 className='news__title'>Recent Articles</h3>
                            <ul className='news__items'>
                                {/* Max: 2 articles */}
                                <NewsCardArticle />
                                <NewsCardArticle />
                            </ul>
                        </section>
                    </div>
                </section>
            </div>
    )
}
