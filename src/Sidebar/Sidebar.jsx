import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import Workexperince from './Workexperince'
import Employment from './Employment'
const Sidebar = ({radiofiltering,changehandler}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-semibold  mb-2'>Filters</h3>

        <Location changehandler={changehandler}/>
        <Salary changehandler={changehandler} radiofiltering={radiofiltering}/>
        <JobPostingData changehandler={changehandler}/>
        <Workexperince changehandler={changehandler}/>
        <Employment changehandler={changehandler}/>

    </div>
  )
}

export default Sidebar