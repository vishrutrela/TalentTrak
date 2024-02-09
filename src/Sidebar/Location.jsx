import React from 'react'
import Inputfield from '../components/Inputfield'

const Location = ({ changehandler }) => {
    return (
        <div>
            <h4 className='text-large font-medium mb-2'>Location</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' value="" onChange={changehandler} />
                    <span className='checkmark'></span>All
                </label>

                <Inputfield changehandler={changehandler} value="london" title="London" name="test" />
                <Inputfield changehandler={changehandler} value="seattle" title="Seattle" name="test" />
                <Inputfield changehandler={changehandler} value="madrid" title="Madrid" name="test" />
                <Inputfield changehandler={changehandler} value="boston" title="Boston " name="test" />
            </div>
        </div>
    )
}

export default Location