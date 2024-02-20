import React, { useEffect } from 'react'
import { useState } from 'react'
import Jobs from './Jobs'
import { NavLink } from 'react-router-dom'
const Myjobs = () => {
    const [searchText, setSearchText] = useState("")
    const [isloading, setIsloading] = useState(false)
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsperpage = 4;

    // console.log(SearchText)
     function fetchData (){
        fetch('http://localhost:2001/my-jobs/vishrutrela@gmail.com').then((res) => res.json()).then((data) => setJobs(data))

     }

    useEffect(() => {
        fetchData();
    }, [])


    const lastitemindex = currentPage * itemsperpage;
    const firstitemindex = lastitemindex - itemsperpage;
    const currentjobs = jobs.slice(firstitemindex, lastitemindex);

    const nextbtn = () => {
        setCurrentPage(currentPage + 1)
    }
    const prevtbtn = () => {
        setCurrentPage(currentPage - 1)
    }








    const handleSearch = () => {
        const filterItems = jobs.filter((job) => job.jobtitle?.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        setJobs(filterItems)
       
    }
    const handleDelete = async (id) => {
        setIsloading(true);
        console.log(id);
        await fetch(`http://localhost:2001/job/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    alert("Job deleted successfully");
                } else {
                    alert("Job deletion failed");
                }

                fetchData();


            })
            .catch((error) => {
                console.error("Error deleting job:", error);
                alert("Error deleting job");
            });
        setIsloading(false)
    }


    return (
        <div className='max-w-screen-2-xl container mx-auto xl:px-24 px-4'>
            <div className="my-jobs-container">
                <h1 className='text-center p-4'>All My Jobs</h1>
                <div className='search-box p-2 text-center mb-2'>
                    <input
                        type="search"
                        name='search'
                        id='search'
                        onChange={(event) => setSearchText(event.target.value)}
                        className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' />
                    <button className='bg-blue-500 text-white font-semibold px-8 py-2 rounded sm mb-4' onClick={handleSearch}>Search</button>



                </div>
                <section className="py-1 bg-blueGray-50">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative left-0 w-full  max-w-full flex-grow flex-1">
                                        <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
                                    </div>
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                        <NavLink to="/post-job">
                                            <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post job</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="block w-full overflow-x-auto">
                                <table className="items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                No.
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Title
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Company Name
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Salary
                                            </th>
                                        
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>

                                    {
                                        jobs.length === 0 ? ("no jobs posted") : (
                                            currentjobs.map((job, index) => {
                                                return (
                                                    <tbody key={index}>
                                                        <tr>
                                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                                {index + 1}
                                                            </th>
                                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                                {job.jobtitle}
                                                            </td>
                                                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                {job.companyName}
                                                            </td>
                                                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                {job.minPrice}-{job.maxPrice}k
                                                            </td>
                                                            
                                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                <button onClick={() => handleDelete(job._id)} className='bg-red-700 py-2 text-white rounded-sm px-5'>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>

                                                )


                                            })
                                        )
                                    }



                                </table>


                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center text-gray-400'>
                    {
                        jobs.length > lastitemindex &&
                        <button className='font-bold underline ' onClick={nextbtn}>Next</button>
                    }
                    {
                        currentPage > 1 &&
                        <button className='font-bold underline ' onClick={prevtbtn}>Prev</button>
                    }
                    </div>

                </section>


            </div>

        </div>
    )
}

export default Myjobs