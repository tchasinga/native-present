import { useState } from 'react';
import { toast } from 'react-hot-toast';

const apis = [
  {
    name: 'Sign Up API',
    url: 'https://blogs-sharing-ideas-api.onrender.com/api/auth/signup',
    description: 'Accepts username, email, password',
  },
  {
    name: 'Login API',
    url: 'https://blogs-sharing-ideas-api.onrender.com/api/auth/signin',
    description: 'Accepts email, password',
  },
  {
    name: 'Create Data API',
    url: 'https://public-api-information.onrender.com/api/creating',
    description: 'API to create data accept: title , body, priority, user_email',
  },
  {
    name: 'Get All Data API',
    url: 'https://public-api-information.onrender.com/api/all',
    description: 'Get all needed API data',
  },
  {
    name: 'Get Data by ID API',
    url: 'https://public-api-information.onrender.com/api/getId/',
    description: 'Get a data by :id for the details pages',
  },
  {
    name: 'Delete Data by ID API',
    url: 'https://public-api-information.onrender.com/api/delete/',
    description: 'Delete a single information by id',
  },
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    toast.success('API URL copied to clipboard!');
  }).catch(() => {
    toast.error('Failed to copy!');
  });
}

export default function Apispages() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index, url) => {
    copyToClipboard(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
  };

  return (
    <div className="flex flex-col items-center justify-center pt-20 space-y-6">
      <h1 className="text-3xl font-bold mb-10">API Endpoints</h1>
      {apis.map((api, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md w-4/5 md:w-1/2">
          <h2 className="text-2xl font-semibold">{api.name}</h2>
          <p className="mt-2 text-gray-700">{api.description}</p>
          <div className="mt-4 flex justify-between items-center gap-2">
            <code className="bg-gray-100 p-2 rounded">{api.url}</code>
            <button
              onClick={() => handleCopy(index, api.url)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {copiedIndex === index ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
