import React from 'react'
import Inputfield from '../components/Inputfield'
const Employment = ({changehandler}) => {
  return (
    <div>
            <h4 className='text-large font-medium mb-2'>Type of employement</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' value="" onChange={changehandler} />
                    <span className='checkmark'></span>Any
                </label>

                <Inputfield changehandler={changehandler} value="Full-time" title="Full-time" name="test" />
                <Inputfield changehandler={changehandler} value="Temporary" title="Temporary" name="test" />
                <Inputfield changehandler={changehandler} value="Part-time" title="Part-time" name="test" />
            </div>
        </div>
  )
}

export default Employment