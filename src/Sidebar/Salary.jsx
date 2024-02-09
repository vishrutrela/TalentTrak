import React from 'react'
import Button from './Button'
import Inputfield from '../components/Inputfield'
const Salary = ({ changehandler, radiofiltering }) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Salary</h4>

            <div className='flex mb-4'>
                <Button clickhandler={radiofiltering} value="" title="Hourly" />
                <Button clickhandler={radiofiltering} value="Monthly" title="Monthly" />
                <Button clickhandler={radiofiltering} value="Yearly" title="Yearly" />
            </div>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' value="" onChange={changehandler} />
                    <span className='checkmark'></span>All
                </label>

                <Inputfield changehandler={changehandler} value={30} title="<= 30000" name="test2" />
                <Inputfield changehandler={changehandler} value={50} title="<= 50000" name="test2" />
                <Inputfield changehandler={changehandler} value={80} title="<= 80000" name="test2" />
                <Inputfield changehandler={changehandler} value={100} title="<= 100000" name="test2" />
            </div>
        </div>

    )
}

export default Salary