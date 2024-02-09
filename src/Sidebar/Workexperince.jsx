import React from 'react'
import Inputfield from '../components/Inputfield'
const Workexperince = ({changehandler}) => {
  return (
    <div>
            <h4 className='text-large font-medium mb-2'>Work experience</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' value="" onChange={changehandler} />
                    <span className='checkmark'></span>All
                </label>
                <Inputfield changehandler={changehandler} value="Any experience" title="Any experience" name="test" />
                <Inputfield changehandler={changehandler} value="Internship" title="Internship" name="test" />
                <Inputfield changehandler={changehandler} value="Work remotely" title="Work remotely" name="test" />
                
            </div>
        </div>
  )
}

export default Workexperince