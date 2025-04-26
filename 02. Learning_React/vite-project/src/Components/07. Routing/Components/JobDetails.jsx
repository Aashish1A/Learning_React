import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();

  return (
    <div>
      <p>
        <b>Job Title : {jobDetails.title}</b>
      </p>
    </div>
  );
};

export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:5000/jobs/" + id);

  // Check if the response is successful
  if (!res.ok) {
    throw new Response("Job not found", { status: 404 });
  }

  return res.json(); // Return the JSON data if successful
};
