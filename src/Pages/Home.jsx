import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../Sidebar/Sidebar';
import Loading from '../components/Loading'
import NewsLetter from '../components/NewsLetter';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
    const itemsperpage = 4;

    

  function changeinputhandler(event) {
    setQuery(event.target.value)
    // console.log(query);
    // console.log(event.target.value);
  }

  async function fetchData() {
    setLoading(true);
    await fetch("https://talenttrak.onrender.com/all-jobs").then(res => res.json()).then(data => {
      setJobs(data);

      setLoading(false);
    })


  }

  useEffect(() => {
    fetchData();
  }, [])

  const lastitemindex = currentPage * itemsperpage;
  const firstitemindex = lastitemindex - itemsperpage;
  let currentjobs = jobs.slice(firstitemindex, lastitemindex);

  const nextbtn = () => {
    setCurrentPage(currentPage + 1)
  }
  const prevtbtn = () => {
    setCurrentPage(currentPage - 1)
  }

 

  const filterItems = jobs.filter((job) => job.jobtitle?.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  // radio base filtering
  const radiofiltering = (event) => {
    setSelectedCategory(event.target.value)
  }

  const changehandler = (event) => {
    setSelectedCategory(event.target.value)
  }

  // butoon based filtering......................
  // MAIN FUNCTION
  const filterData = (jobs, selected, query) => {
    let filterJobs = jobs;

    if (query) {
      filterJobs = filterItems;
    }

    if (selected) {
      currentjobs = currentjobs?.filter(({ maxPrice, jobLocation, postingDate, experienceLevel, employementType, salaryType }) => (
        jobLocation?.toLowerCase() === selected.toLowerCase() ||
        employementType?.toLowerCase() === selected.toLowerCase() ||
        postingDate >= selected ||
        parseInt(maxPrice) === parseInt(selected) ||
        salaryType?.toLowerCase() === selected.toLowerCase() ||
        experienceLevel?.toLowerCase() === selected.toLowerCase()
      ))

    }
    
    return (
      currentjobs?.map((data, index) => <Card key={index} data={data} />)
    )
  }
  

  const result = filterData(jobs, selectedCategory, query);

  return (
    <div className=''>
      <Banner query={query} changeinputhandler={changeinputhandler} />
      {/* main content */}

      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 py-12'>
        <div className='bg-white p-4 rounded'>
          <Sidebar changehandler={changehandler} radiofiltering={radiofiltering} />
        </div>
        {
          loading ? (<Loading />) : (<div className='col-span-2 bg-white p-4 rounded-sm'><Jobs result={result} />
            <div className='flex flex-col justify-center text-gray-400'>
              {
                jobs.length > lastitemindex &&
                <button className='  font-bold underline ' onClick={nextbtn}>Next</button>
              }
              {
                currentPage > 1 &&
                <button className='font-bold underline ' onClick={prevtbtn}>Prev</button>
              }
            </div>
          </div>)
        }

        <div className='bg-white p-4 rounded'>
          <NewsLetter />
        </div>

      </div>
    </div>
  )
}

export default Home