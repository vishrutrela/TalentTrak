import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from 'react-icons/fa6'
import Swal from "sweetalert2"
const NewsLetter = () => {
    async function applyhandler(){
        const { value: email } = await Swal.fire({
            title: "Input email address",
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address"
          });
          if (email) {
            Swal.fire(`Entered email: ${email}`);
          }
    }

    async function applyresumehandler(){
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

      
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/>
                Email me for Jobs</h3>
                <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, pariatur.</p>

                <div className='w-full space-y-4'>
                    <input type="email" name='email' id='email' placeholder='name@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none' />
                    <input type="submit" value={'Subscribe'} onClick={applyhandler} className='w-full block py-2 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold' />
                </div>
        </div>

        <div className='mt-20'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Get noticed faster</h3>
                <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, pariatur.</p>

                <div className='w-full space-y-4'>
                    <input type="submit" value={'Upload your resume'} onClick={applyresumehandler} className='w-full block py-2 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold' />
                </div>
        </div>
    </div>
  )
}

export default NewsLetter