import React, { useState } from 'react';

const EventRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        isAttendingWithGuest: false,
        guestName: ''
    });

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        setShowDetails(false);
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? '' : 'Name is required';
        tempErrors.email = /^\S+@\S+\.\S+$/.test(formData.email) ? '' : 'Email is invalid';
        tempErrors.age = formData.age > 0 ? '' : 'Age must be a number greater than 0';
        if (formData.isAttendingWithGuest) {
            tempErrors.guestName = formData.guestName ? '' : 'Guest name is required';
        }
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmittedData(formData);
            setShowDetails(true);
        }
    };

    return (
        <div className="flex max-w-4xl mx-auto mt-10 p-8 bg-gradient-to-r from-pink-200 to-purple-400 shadow-lg rounded-lg space-x-8 relative font-ubuntu">
            <div className="w-full">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-playwrite">Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder={errors.name || "Enter your name"}
                            className={`mt-1 block w-full px-4 py-2 border ${errors.name ? 'placeholder-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400`}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-playwrite">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder={errors.email || "Enter your email"}
                            className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'placeholder-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400`}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 font-playwrite">Age:</label>
                        <input 
                            type="number" 
                            name="age" 
                            value={formData.age} 
                            onChange={handleChange} 
                            placeholder={errors.age || "Enter your age"}
                            className={`mt-1 block w-full px-4 py-2 border ${errors.age ? 'placeholder-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400`}
                        />
                    </div>
                    <div className="flex items-center">
                        <input 
                            type="checkbox" 
                            name="isAttendingWithGuest" 
                            checked={formData.isAttendingWithGuest} 
                            onChange={handleChange} 
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label className="ml-2 block text-sm font-medium text-gray-700 font-playwrite">Are you attending with a guest?</label>
                    </div>
                    {formData.isAttendingWithGuest && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 font-playwrite">Guest Name:</label>
                            <input 
                                type="text" 
                                name="guestName" 
                                value={formData.guestName} 
                                onChange={handleChange} 
                                placeholder={errors.guestName || "Enter your guest's name"}
                                className={`mt-1 block w-full px-4 py-2 border ${errors.guestName ? 'placeholder-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400`}
                            />
                        </div>
                    )}
                    <button 
                        type="submit" 
                        className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Register Now
                    </button>
                </form>
            </div>
            <div className={`w-full absolute top-0 right-0 transform transition-transform duration-1000 ${showDetails ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-opacity`}>
                {submittedData && (
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-8">
                        <h2 className="text-lg font-medium text-gray-900">Form Data</h2>
                        <p className="text-sm text-gray-700 mt-2">Name: {submittedData.name}</p>
                        <p className="text-sm text-gray-700 mt-2">Email: {submittedData.email}</p>
                        <p className="text-sm text-gray-700 mt-2">Age: {submittedData.age}</p>
                        <p className="text-sm text-gray-700 mt-2">Attending with guest: {submittedData.isAttendingWithGuest ? 'Yes' : 'No'}</p>
                        {submittedData.isAttendingWithGuest && <p className="text-sm text-gray-700 mt-2">Guest Name: {submittedData.guestName}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventRegistrationForm;
