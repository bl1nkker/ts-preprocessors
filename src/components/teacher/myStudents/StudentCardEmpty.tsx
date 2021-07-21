import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

interface Props {
    
}

export const StudentCardEmpty = (props: Props) => {
    return (
        <div className='student__card'>
            <section className='avatar'>
                <button><AddCircleOutlineIcon className='empty__icon'/></button>
            </section>

            <section className='info'>
                <h3 className='name'>-</h3>
                <p className='specialty'>Add new student</p>
                <p className='gpa'>By adding a new student, you can track changes in his profile</p>
            </section>
        </div>
    )
}
