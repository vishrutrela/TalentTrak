import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Salaryheader from '../components/Salaryheader'
import {FaBagShopping} from 'react-icons/fa6'
import Swal from "sweetalert2"

const JobDetails = () => {
  const { id } = useParams()
  const [job, setJob] = useState([])

  function fetchData() {
    fetch(`http://localhost:2001/all-jobs/${id}`).then(data => data.json()).then(data => setJob(data));

  }
  async function applyhandler(){
    const { value: file } = await Swal.fire({
      title: "Upload Resume",
      input: "file",
      inputAttributes: {
        "accept": "image/*",
        "aria-label": "Upload your profile picture"
      }
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: "Your uploaded file",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture"
        });
      };
      reader.readAsDataURL(file);
    }
  }


  useEffect(() => {
    fetchData();
  }, [])


  return (

    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <Salaryheader title={job.jobtitle} path={"/"} />
      <div className='mr-3'>
        <div>
          <h2 className='font-semibold'>JOB ID: {job._id?.slice(0, 5)}</h2>
        </div>
        <h1 className='text-blue'>Job details</h1>
        <p className='text-gray-300 text-sm'>Here you can find the details of this job along with </p>
        <p className='text-gray-300 text-sm'>the benefits and the future growth</p>

        <div className='my-4'>
          <h2 className='flex font-semibold '><p className='pr-1'><FaBagShopping/></p> Job type</h2>
        </div>
        <div>
          <button>{job.employementType}</button>
          <button onClick={applyhandler} className='bg-blue-500 text-white font-semibold px-8 py-2 rounded sm mb-4'>Apply now</button>
        </div>

        <div className='flex justify-between mb-20'>
          <div className=' border w-3/12 p-6 shadow-md bg-gray-100'>
            <h2 className='font-semibold underline'>Benefits</h2>
            <div className='text-gray-500'>
            <p>1. {job.minPrice}-{job.maxPrice}k</p>
            <p>2. Disability insurance</p>
            <p>3. Employee discount</p>
            <p>4. Health Insurance</p>
            <p>5. Paid time off</p>
            <p>6. Vision insurance</p>
            <p>7. Flexible work schedules</p>
            <p>8. Performance Bonuses</p>
            <p>9. Transportation Benefits</p>
            <p>10. Paid Parental Leaves</p>
            </div>

          </div>
          <div className=' border w-3/12 p-6 shadow-md bg-gray-100'>
            <h2 className='font-semibold underline'>
              Description
            </h2>
            <p className='text-gray-500'>{job.description}</p>
          </div>
          <div className=' border w-3/12 p-6 shadow-md bg-gray-100'>
            <h2 className='font-semibold underline'>Future Growth</h2>
            <p className='text-gray-500'>{job.companyName}, a forward-thinking software development company, envisions robust future growth by strategically expanding its artificial intelligence (AI) solutions. Recognizing the escalating demand for AI-driven technologies, the company invests in research and development to diversify its product offerings, addressing industry-specific challenges.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails