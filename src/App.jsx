import React from 'react';
import EventRegistrationForm from './components/EventRegistrationForm';

function App() {
    return (
        <div className=" min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat font-ubuntu " style={{ backgroundImage: `url('/event.jpg')` }} >
            <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg ">
                <h1 className="text-3xl font-extrabold text-[#f131c8] mb-6 text-center font-playwrite">Event Registration</h1>
                <EventRegistrationForm />
            </div>
        </div>
    );
}

export default App;