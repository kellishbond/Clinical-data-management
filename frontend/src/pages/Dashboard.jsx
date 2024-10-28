// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Sample data for medical write-up
    const medicalData = {
        title: "The Significance of Medical Assistance",
        description: "Medical assistance is fundamental to ensuring the health and well-being of individuals and communities. It encompasses a wide range of services designed to prevent, diagnose, and treat medical conditions, ultimately fostering healthier lives and improving quality of care.",
        details: [
            {
                subTitle: "Preventive Health Services",
                text: "Preventive health services, including screenings, immunizations, and wellness checks, play a critical role in identifying health issues before they become serious. These services empower individuals to take proactive steps toward their health.",
            },
            {
                subTitle: "Emergency Medical Response",
                text: "In emergencies, rapid medical assistance is essential. Access to emergency care can be life-saving, allowing for immediate treatment of injuries or acute illnesses, thereby minimizing potential complications.",
            },
            {
                subTitle: "Management of Chronic Conditions",
                text: "For those with chronic illnesses such as diabetes or heart disease, ongoing medical assistance is vital. Regular consultations, medication management, and lifestyle guidance help patients maintain their health and prevent complications.",
            },
            {
                subTitle: "Mental Health Support",
                text: "Medical assistance extends to mental health services, which are crucial for overall well-being. Access to counseling, therapy, and support groups helps individuals manage stress, anxiety, and other mental health challenges.",
            },
            {
                subTitle: "Education and Empowerment",
                text: "Education about health issues and available resources empowers individuals to make informed decisions regarding their health. Medical assistance includes educating patients about disease prevention and management strategies."
            },
        ],
        reasons: [
            "Ensures timely intervention and treatment",
            "Reduces the risk of severe health complications",
            "Supports overall community health",
            "Provides necessary resources and education",
            "Encourages preventive care and early detection"
        ],
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <div className={`bg-blue-500 text-white p-4 md:p-8 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-3xl md:text-5xl font-bold animate-bounce">Welcome to the Medical Dashboard</h1>
                <p className="mt-2 md:mt-4 text-base md:text-lg">Your health data at your fingertips.</p>
                <p className="mt-1 md:mt-2 text-sm md:text-base">Customer Care: <span className="font-bold">+123-456-7890</span></p>
            </div>
            <div className="p-4 md:p-8 bg-gray-100 flex-grow">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">{medicalData.title}</h2>
                <p className="mb-4">{medicalData.description}</p>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Why is Medical Assistance Vital?</h3>
                <ul className="list-disc ml-4 md:ml-6 mb-4">
                    {medicalData.reasons.map((reason, index) => (
                        <li key={index}>{reason}</li>
                    ))}
                </ul>
                
                {medicalData.details.map((detail, index) => (
                    <div key={index} className="mb-6 md:mb-8 p-4 border border-blue-300 rounded-lg bg-white shadow-md transform transition-transform hover:scale-105">
                        <h4 className="text-md md:text-lg font-semibold">{detail.subTitle}</h4>
                        <p className="mt-2 text-sm md:text-base">{detail.text}</p>
                    </div>
                ))}
            </div>
            <footer className="bg-gray-200 text-center p-2 md:p-4 mt-auto">
                <p className="text-xs md:text-base">© 2024 Medical Dashboard. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
