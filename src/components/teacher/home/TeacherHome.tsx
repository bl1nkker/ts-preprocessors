import React from 'react'
import { StudentType } from '../../../types'
import { NewsCardArticle } from './NewsCardArticle'
import { NewsCardStudent } from './NewsCardStudent'

interface Props {
    
}

const tempStudents:StudentType[] = [
    { name:'Edward', id: 1, gpa: 3.68, specialty:'Hotel Management', description:'Lorem', socialMedia:{}, avatar:'https://i.pinimg.com/originals/b2/90/89/b290899f20be2d555e193ee134fd74ca.jpg'  },
    { name:'Mariya', id: 2, gpa: 2.68, specialty:'Software Engineering', description:'Lorem', socialMedia:{}, avatar:'https://i.pinimg.com/736x/d4/79/23/d479233a82bd58e06359b8f770c4d3db.jpg' },
    { name:'Emilia', id: 3, gpa: 4.00, specialty:'Data Analysis', description:'Lorem', socialMedia:{}, avatar:'https://i.pinimg.com/564x/da/6e/e1/da6ee1bf314131389b761dbfd2ca5363.jpg'  },
]

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
                                {tempStudents.map((student:StudentType) => <NewsCardStudent student={student}/>)}
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
