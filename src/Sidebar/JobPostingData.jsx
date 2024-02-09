import React from 'react'
import Inputfield from '../components/Inputfield'
const JobPostingData = ({changehandler}) => {

    const now =new Date();

    const twentyfoursAgo = new Date(now- 24*60*60*1000);
    const sevenDaysAgo = new Date(now- 7*24*60*60*1000);
    const thirtyDaysAgo = new Date(now- 30*24*60*60*1000);

    //convert date into string
    const twentyfoursAgoDate = twentyfoursAgo.toISOString().slice(0,10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0,10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0,10);
  return (
    <div>
            <h4 className='text-large font-medium mb-2'>Location</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' value="" onChange={changehandler} />
                    <span className='checkmark'></span>All time
                </label>

                <Inputfield changehandler={changehandler} value={twentyfoursAgoDate} title="last 24hrs" name="test" />
                <Inputfield changehandler={changehandler} value={sevenDaysAgoDate} title="last 7 days" name="test" />
                <Inputfield changehandler={changehandler} value={thirtyDaysAgoDate} title="last 30 days" name="test" />
            </div>
        </div>
  )
}

export default JobPostingData