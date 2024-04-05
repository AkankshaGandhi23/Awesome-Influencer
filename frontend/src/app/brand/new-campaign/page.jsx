'use client';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const NewCampaign = () => {

    const [selFile, setSelFile] = useState('');

    const campaignForm = useFormik({
        initialValues: {
            title: '',
            type: '',
            cover: '',
            description: '',
            incentive: 0,
            lastDate: '',
            // brand: ,
            createdAt: new Date()
        },
        onSubmit: (values, {resetForm}) => {
            values.cover = selFile;
            console.log(values);
            fetch('http://localhost:5000/campaign/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    console.log(res);
                    if (res.status === 200){
                        toast.success('Campaign added successfully');
                        resetForm();
                    }
                    else
                        toast.error('Failed to add campaign');
                }).catch((err) => {
                    console.log(err);
                    toast.error('Failed to add campaign');
                });
        }
    });

    const uploadFile = (e) => {
        let file = e.target.files[0];
        const fd = new FormData();
        setSelFile(file.name);
        fd.append('myfile', file);
        fetch(`http://localhost:5000/util/uploadfile`, {
          method: 'POST',
          body: fd
        }).then(res => {
          if (res.status === 200) {
            toast.success('Image uploaded successfully');
          }
        });
    
      }


    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                <h1 className="w-full text-3xl text-black pb-6">New Campaign</h1>
                <div className="flex flex-wrap">
                    <div className="w-full mx-auto lg:w-1/2 mt-6 pl-0 lg:pl-2">

                        <div className="leading-loose">
                            <form className="p-10 bg-white rounded shadow-xl" onSubmit={campaignForm.handleSubmit}>
                                <p className="text-lg text-gray-800 font-medium pb-4">
                                    Campaign information
                                </p>
                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600" htmlFor="title">
                                        Title
                                    </label>
                                    <input
                                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                        id="title"
                                        onChange={campaignForm.handleChange}
                                        value={campaignForm.values.title}
                                        type="text"
                                        required=""
                                        placeholder="Brand Name"
                                        aria-label="Name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600" htmlFor="type">
                                        Product
                                    </label>
                                    <input
                                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                        id="type"
                                        onChange={campaignForm.handleChange}
                                        value={campaignForm.values.type}
                                        type="text"
                                        required=""
                                        placeholder="Type"
                                        aria-label="Type"
                                    />

                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600" htmlFor="cover">
                                        Cover
                                    </label>
                                    <input
                                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                        type="file"
                                        onChange={uploadFile}
                                        required=""
                                        placeholder="Cover"
                                        aria-label="Cover"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600" htmlFor="description">
                                        Description

                                    </label>
                                    <textarea
                                        className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                                        id="description"
                                        onChange={campaignForm.handleChange}
                                        value={campaignForm.values.description}
                                        type="text"
                                        required=""
                                        placeholder="Description"
                                        aria-label="Description"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600" htmlFor="incentive">
                                        Incentive
                                    </label>
                                    <input
                                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                        id="incentive"
                                        onChange={campaignForm.handleChange}
                                        value={campaignForm.values.incentive}
                                        type="text"
                                        required=""
                                        placeholder="Incentive"
                                        aria-label="Incentive"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600" htmlFor="lastDate">
                                        Last Date
                                    </label>
                                    <input
                                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                        id="lastDate"
                                        onChange={campaignForm.handleChange}
                                        value={campaignForm.values.lastDate}
                                        type="date"
                                        required=""
                                        placeholder="Last Date"
                                        aria-label="Last Date"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600" htmlFor="title">
                                        Minimum Followers
                                    </label>
                                    <input
                                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                        id="title"
                                        onChange={campaignForm.handleChange}
                                        value={campaignForm.values.title}
                                        type="text"
                                        required=""
                                        placeholder="Followers count"
                                        aria-label="Name"
                                    />
                                </div>




                                <div className="mt-6">
                                    <button
                                        className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                                        type="submit"
                                    >
                                        Add Campaign
                                    </button>
                                </div>
                            </form>
                        </div>
                        <p className="pt-6 text-gray-600">
                            Source:{" "}
                            <a
                                className="underline"
                                href="https://tailwindcomponents.com/component/checkout-form"
                            >
                                https://tailwindcomponents.com/component/checkout-form
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default NewCampaign