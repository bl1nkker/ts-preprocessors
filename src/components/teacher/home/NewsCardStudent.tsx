import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { StudentType } from '../../../types';
import { Link } from 'react-router-dom';

interface Props {
    student:StudentType
}

export const NewsCardStudent:React.FC<Props> = ({ student }) => {
    return (
        <div className='news__student'>
            <div className='news__student-avatar'>
                <img src={student.avatar} alt="kawaii" />
            </div>
            <div className='news__student-info'>
                <span className='name'>{student.name}</span>
                <div className='stars'>
                    <StarIcon className='star' fontSize='small' />
                    <StarIcon className='star' fontSize='small' />
                    <StarIcon className='star' fontSize='small' />
                    <StarIcon className='star' fontSize='small' />
                    <StarIcon className='star' fontSize='small' />
                </div>
            </div>
            <div>
                {/* Refactor this */}
                <Link to={`/teacher/students/${student.id}`}>
                    <button className=''>Click</button>
                </Link>
            </div>
        </div>
    )
}
