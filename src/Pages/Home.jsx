import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';

const Home = () => {
  const[selectedCategory, setSelectedCategory]= useState(null);
  const[jobs,setJobs]= useState([]);
  const[query,setQuery]= useState("");
  function changeinputhandler(event){
    setQuery(event.target.value)
    console.log(query);
    console.log(event.target.value);
  }

  useEffect(()=>{
    fetch("jobs.json").then(res=> res.json()).then(data=>{
      setJobs(data);
    })
  },[])

  const filterItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  // radio base filtering
  const radiofiltering =(event)=>{
    setRadiovalue(event.target.value)
  }

  // butoon based filtering......................

  const filterData = (jobs,selected,query)=>{
    let filterJobs = jobs;

    if(query){
      filterJobs = filterItems;
    }

    if(selected){
      filterJobs = filterJobs.filter(({maxPrice,jobLocation,postingDate,experienceLevel,employmentType,salaryType})=>(
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) === parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase()
      ))
      console.log(filterJobs)
    }

    return filterJobs.map((data,index)=> <Card key={index} data={data}/>)
  }

  const result = filterData(jobs,selectedCategory,query);

  return (
    <div className=''>
      <Banner query={query} changeinputhandler={changeinputhandler}/>
        {/* main content */}

      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 py-12'>
        <div className='bg-white p-4 rounded'>left</div>
        <div className='col-span-2 bg-white p-4 rounded-sm'><Jobs result={result}/></div>
        <div className='bg-white p-4 rounded'>right</div>
        
      </div>
    </div>
  )
}

export default Home