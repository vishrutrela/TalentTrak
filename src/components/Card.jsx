import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi'
const Card = ({ data }) => {
    const { companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, employmentType, description } = data;
    return (
        <section className='card'>
            <NavLink to={"/"} className="flex flex-col gap-4 sm:flex-row items-start text-gray-400">
                <img src={companyLogo} alt="" />
                <div className=''>
                    <h4 className='text-primary mb-1'>{companyName}</h4>
                    <h3 className='text-lg text-black font-semibold mb-2'>{jobTitle}</h3>

                    <div className='flex flex-wrap text-base gap-2 mb-2'>
                        <span className='flex items-center gap-2'><FiMapPin />{jobLocation}</span>
                        <span className='flex items-center gap-2'><FiClock />{employmentType}</span>
                        <span className='flex items-center gap-2'><FiDollarSign />{minPrice}-{maxPrice}k</span>
                        <span className='flex items-center gap-2'><FiCalendar />{postingDate}</span>
                    </div>
                    <p>{description}</p>
                </div>
            </NavLink>
        </section>
    )
}

export default Card