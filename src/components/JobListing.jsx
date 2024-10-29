function JobListing({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{job.description}</div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <i className="fa-solid fa-location-dot text-lg"></i>
            {job.location}
          </div>
          <button className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobListing;
