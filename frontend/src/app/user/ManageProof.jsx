import React, { useState } from 'react'
import toast from 'react-hot-toast';

const ManageProof = ({ enrollmentData }) => {

  const [enrollmentDetails, setEnrollmentDetails] = useState(enrollmentData);

  const updateEnrollment = (data) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/enroll/update/${enrollmentData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then(data => {
        console.log(data);
        setEnrollmentDetails(data);
        toast.success('Enrollment updated successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('myfile', file);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/uploadfile`, {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          updateEnrollment({
            proof: {
              file: file.name,
              type: 'image',
              uploadDate: new Date()
            }
          });
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        toast.success('Proof uploaded successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h3 className='text-slate-900 text-2xl'>Proof Upload</h3>
      <input type="file" className="border border-gray-300 p-2 w-full mt-2" onChange={uploadFile} />

      {
        enrollmentDetails.proof && <div>
          <h3 className='text-slate-900 text-2xl'>Proof Details</h3>
          <h3>File: {enrollmentDetails.proof.file}</h3>
          <h3>Type: {enrollmentDetails.proof.type}</h3>
          <h3>Upload Date: {new Date(enrollmentDetails.proof.uploadDate).toLocaleDateString()}</h3>
        </div>
      }

    </div>
  )
}

export default ManageProof;