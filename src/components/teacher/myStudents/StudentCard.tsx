import React, { useState } from 'react'
import { StudentType } from '../../../types'

interface Props {
    match: any
}

const tempStudents:StudentType[] = [
    { name:'Edward', id: 1, gpa: 3.68, specialty:'Hotel Management', description:'Lorem', socialMedia:{}, avatar:'https://i.pinimg.com/originals/b2/90/89/b290899f20be2d555e193ee134fd74ca.jpg'  },
    { name:'Mariya', id: 2, gpa: 2.68, specialty:'Software Engineering', description:'Lorem', socialMedia:{}, avatar:'https://i.pinimg.com/736x/d4/79/23/d479233a82bd58e06359b8f770c4d3db.jpg' },
    { name:'Emilia', id: 3, gpa: 4.00, specialty:'Data Analysis', description:'Lorem', socialMedia:{}, avatar:'https://i.pinimg.com/564x/da/6e/e1/da6ee1bf314131389b761dbfd2ca5363.jpg'  },
]

export const StudentCard = (props: Props) => {
    const studentId = parseInt(props.match.params.id)
    const [currentStudent, setCurrentStudent] = useState(tempStudents.find((student:StudentType) => student.id === studentId))
    console.log(currentStudent);
    return (
            <div className='teacher__container'>
                
            </div>
    )
}
