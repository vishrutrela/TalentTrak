import React from 'react'
import { NavLink } from 'react-router-dom'
const Salaryheader = ({title,path}) => {
    return (
        <div className='flex justify-center'>
            <div className="flex flex-col items-center justify-center h-[220px] mt-10 bg-gray-100 w-11/12">
                <p className="text-center text-[40px] font-bold text-blue-500">{title}</p>
                <p><NavLink to={path}>Home/</NavLink>Salary</p>
            </div>

        </div>)
}

export default Salaryheader