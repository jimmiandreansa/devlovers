import React from 'react'

const PostJobPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 mb-8">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          How To Post A Job?
        </h2>
        <p className="text-center mb-6">
          Thanks for considering to post a job at Devlovers. The worlds
          first developer job board.
          <br />
          Here are the 3 steps to create it:
        </p>
        <ol className="list-decimal list-inside mb-6">
          <li>Fill in your details below.</li>
          <li>Complete payment for 30 days of job post (Rp 150.000).</li>
          <li>See the job live instantly.</li>
        </ol>
        <p className="text-center mb-6">Ready? Lets go:</p>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="companyEmail"
            >
              Whats your company email?*
            </label>
            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="companyName"
            >
              Whats the name of your company?*
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="position"
            >
              Whats the position youre hiring for?*
            </label>
            <input
              type="text"
              id="position"
              name="position"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="languages"
            >
              Whats all the languages programming / framework your ideal applicant should have?*
            </label>
            <input
              type="text"
              id="languages"
              name="languages"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <button
              type="button"
              className="mt-2 text-blue-500 hover:underline"
            >
              Add More
            </button>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="employmentType"
            >
              Whats the employment type?*
            </label>
            <select
              id="employmentType"
              name="employmentType"
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              <option value="">Select employment type</option>
              {/* Tambahkan opsi jenis pekerjaan di sini */}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="remote"
            >
              Is this job remote?*
            </label>
            <select
              id="remote"
              name="remote"
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="location"
            >
              Remote or not, is this job restricted for a specific location?*
            </label>
            <select
              id="location"
              name="location"
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              <option value="">Select locations</option>
              {/* Tambahkan opsi lokasi di sini */}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Whats the job description?*
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="salaryRange"
            >
              Whats the annual salary range in IDR (gross, annualized,
              full-time equivalent)?*
            </label>
            <div className="flex space-x-2">
              <select
                id="minSalary"
                name="minSalary"
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">Select minimum salary</option>
                {/* Tambahkan opsi gaji minimum di sini */}
              </select>
              <select
                id="maxSalary"
                name="maxSalary"
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">Select maximum salary</option>
                {/* Tambahkan opsi gaji maksimum di sini */}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="applicationUrl"
            >
              Whats your application URL?*
            </label>
            <input
              type="url"
              id="applicationUrl"
              name="applicationUrl"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-lg font-bold"
            >
              Get Started For Rp 150.000
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-6">
          <button className="text-blue-500 hover:underline">Support</button>
        </div>
      </div>
    </div>
  );
}

export default PostJobPage
