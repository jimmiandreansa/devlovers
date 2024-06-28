import React from "react";

interface Job {
  id: number;
  company: string;
  logo: string;
  position: string;
  technologies: string[];
  minSalary: number;
  maxSalary: number;
  location: string;
  timePosted: string;
  description: string;
}

interface JobCardProps {
  job: Job;
  isOpen: boolean;
  onToggle: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, isOpen, onToggle }) => {
  const formatRupiah = (value: number) => {
    return value.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div
      onClick={onToggle}
      className="border-b py-4 bg-white rounded-lg py-2 px-6 border hover:border-main mb-2 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
            {job.logo ? (
              <img src={job.logo} className="w-full h-full object-contain" />
            ) : (
              <span>Logo</span>
            )}
          </div>
          <div className="ml-4">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-xl">{job.position}</h2>
            </div>
            <p className="text-gray-500">
              {job.company} - <span className="font-light">{job.location}</span>
            </p>
            <div className="flex mt-2">
              {job.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-green-100 rounded-full mr-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-2">
              <span>
                {formatRupiah(job.minSalary)} - {formatRupiah(job.maxSalary)}
              </span>
            </div>
          </div>
        </div>
        <div>
          <p>{job.timePosted}</p>
          <button className="mt-2 px-4 py-2 bg-gray-300 rounded hover:bg-main hover:text-white">
            Apply
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-gray-700">{job.description}</p>
        </div>
      )}
    </div>
  );
};

export default JobCard;
