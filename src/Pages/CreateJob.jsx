import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Creatable from 'react-select/creatable';
import Jobs from './Jobs';
import toast from 'react-hot-toast';
const CreateJob = () => {
    const [selectoption, setSelectoption] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {

        data.skillsArray = selectoption;

        fetch("https://talenttoko.onrender.com/post-job", {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((result) => {
            
            
        })
        alert("Job posted successfully")
        reset();
    }


    const options = [
        { value: "HTML",label:"HTML" },
        { value: "C++", label: "C++" },
        { value: "CSS", label: "CSS" },
        { value: "Javascript", label: "Javascript" },
        { value: "React", label: "React" },
        { value: "NodeJs", label: "NodeJs" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "Redux", label: "Redux" }
    ]

    



    return (
        <div className='max-w-screen-2xl mx-auto xl:px-24 px-4 container'>
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    {/* first row */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input type="text" defaultValue={"Web Developer"}
                                {...register("jobtitle")} className='create-job-input'
                            />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Name</label>
                            <input type="text" placeholder='Ex. microsoft'
                                {...register("companyName")} className='create-job-input'
                            />
                        </div>
                    </div>
                    {/* second row */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimum Salary</label>
                            <input type="text" placeholder='Ex. 20k'
                                {...register("minPrice")} className='create-job-input'
                            />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Maximum Salary</label>
                            <input type="text" placeholder='Ex. 50k'
                                {...register("maxPrice")} className='create-job-input'
                            />
                        </div>
                    </div>

                    {/* dropdown menu third row */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Salary Type</label>
                            <select {...register("salaryType")} className='create-job-input'>
                                <option value="">Choose you Salary</option>
                                <option value="No experience">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Location</label>
                            <input type="text" placeholder='ex. London'
                                {...register("jobLocation")} className='create-job-input'
                            />
                        </div>
                    </div>

                    {/* forth row */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Posting Date</label>
                            <input type="Date" defaultValue={""}
                                {...register("postingDate")} className='create-job-input'
                            />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Experience level</label>
                            <select {...register("experienceLevel")} className='create-job-input'>
                                <option value="">Select your Experience level</option>
                                <option value="Any experience">Any experience</option>
                                <option value="Internship">Internship</option>
                                <option value="Work remotely">Work remotely</option>
                            </select>
                        </div>
                    </div>

                    {/* fifth row */}
                    <label className='block mb-2 text-lg'>Required skill sets:</label>
                    <Creatable
                        defaultValue={selectoption}
                        onChange={setSelectoption}
                        options={options}
                        isMulti
                        className='create-job-input py-4'
                    />

                    {/* sixthrow */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Logo</label>
                            <input type="url" placeholder='Paste your image URL: https://new-tab-page/icons/google_logo.svg'
                                {...register("companyLogo")} className='create-job-input'
                            />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Employement Type</label>
                            <select {...register("employementType")} className='create-job-input'>
                                <option value="">Select your job type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Temporary">Temporary</option>
                                <option value="Part-time">Part-time</option>
                            </select>
                        </div>
                    </div>

                    {/* seventhrow */}
                    <label className='block mb-2 text-lg'>Job Description</label>
                    <textarea {...register("description")} className='w-full pl-3 py-1.5 focus:outline-none' placeholder='enter description here..'
                        rows={6} />

                    {/* eightth row */}
                    <label className='block mb-2 text-lg'>Job Posted by</label>
                    <input type="email" placeholder='xyz@gmail.com'
                        {...register("postedBy")} className='create-job-input'
                    />



                    <input className='bg-blue text-white rounded-sm p-1 hover:cursor-pointer hover:font-semibold hover:rounded-md' type="submit" />
                </form>

            </div>
        </div>
    )
}

export default CreateJob