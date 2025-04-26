import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {

    const jobsData = useLoaderData();

  return (
    <div className='py-10 px-0 w-full flex justify-between gap-5'>
        {jobsData.map((job) => {
            return <Link className='flex-1 decoration-0 p-2.5 bg-[#efefef]'>
                <h4 className='font-2xl font-bold'>{job.title}</h4>
                <p>{job.location}</p>
            </Link>
        })}
    </div>
  )
}

export default Jobs

export const jobsLoader = async () => {
    const res = await fetch("http://localhost:5000/jobs");
    return res.json()
}