import React, { useEffect, useState } from 'react'
import Salaryheader from '../components/Salaryheader'
import { NavLink } from 'react-router-dom'
import Loading from '../components/Loading';

const SalaryPage = () => {
    const [searchText, setSearchText] = useState("");
    const [salary, setSalary] = useState([]);
    const[isloading,setIsloading] =useState(false)


    useEffect(() => {
        setIsloading(true)
        fetch("salary.json")
            .then(res => res.json())
            .then(data => {
                setSalary(data);

            })
            setIsloading(false)
    }, [searchText])


    const handleSearch = (event) => {
        const filterItems = salary.filter((job) => job.title?.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        setSalary(filterItems)
        console.log(filterItems)

    }


    return (
        <div className='max-screen-2xl container mx-auto xl:px-24 px-4'>
            <Salaryheader title={"Estimate Salary"} path={"/"} />
            <div className='search-box p-2 text-center mb-2'>
                <input
                    type="search"
                    name='search'
                    id='search'
                    onChange={(event) => setSearchText(event.target.value)}
                    className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' />
                <button className='bg-blue text-white font-semibold px-8 py-2 rounded sm mb-4' onClick={handleSearch}>Search</button>



            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center ml-12" >
            {
                isloading ?(<Loading/>):(
                    salary.map((data) => {
                        return (
                            <div key='data.id' className='shadow py-8 px-3'>
                                <h4 className='font-semibold text-xl'>{data.title}</h4>
                                <p className='font-medium text-blue'>{data.salary}</p>
                                <div className='flex flex-wrap gap-4'>
                                    <NavLink className=" text-black underline">{data.status}</NavLink>
                                    <NavLink className=" text-black underline">{data.skills}</NavLink>
                                </div>
    
                            </div>
                        )
                    })
                )
            }
            </div>

        </div>
    )
}

export default SalaryPage