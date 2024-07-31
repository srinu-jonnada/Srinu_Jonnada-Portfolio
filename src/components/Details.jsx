import React from 'react'
import Button from './Button';
import Certificate from './Certificate';
import Internship from './Internship';
import Project from './Project';

import { IoCalendar } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import ThemeToggleButton from './ThemeToggleButton';
import { FaArrowCircleUp } from "react-icons/fa";

import { Ripple, initTWE, } from "tw-elements";
initTWE({ Ripple });

function toTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

function Details() {
    return (
        <>
        {/* <div className="p-0 overflow-scroll text-black rounded-lg border border-4 border-black dark:text-white dark:bg-gray-800 dark:border-white" id='top'> */}
        <div className="p-0 overflow-scroll text-black bg-white rounded-lg border border-4 border-gray-500 dark:text-white dark:bg-black dark:border-white" id='top'>
            <ThemeToggleButton/>

            {/* <button className="border border-2 border-black px-2 py-1 m-2 rounded">Download Resume</button> */}
            <div className='flex justify-end m-3 gap-2'>
            <a className='' href='https://drive.google.com/file/d/1lHtThrT-6Q_JFx7aE-wAuQor2HtcIRHg/view?usp=sharing' download={true} target='blank'>
            <button type="button"
                data-twe-ripple-init
                data-twe-ripple-color="black"
                className="inline-block rounded text-black border border-1 border-black dark:text-white dark:border-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-primary-0 transition duration-150 ease-in-out hover:text-black hover:shadow-black focus:bg-white focus:text-black focus:shadow-black focus:outline-none focus:ring-0 active:bg-black active:text-black active:shadow-black motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                    <span className='flex gap-1 justify-center items-center'><FaDownload/> Download Resume</span>
                    
                    </button>
            </a>
            </div>
            
            

            {/* profile summary section */}
            <div className='m-3 p-3 rounded  opacity-95'>
                <h1 className="Profile my-2 font-bold text-xl">Profile</h1>
                <p className='m-3'>A highly motivated and dedicated fresher with a strong educational background and practical experience in data analysis, SQL, and machine learning. Committed to leveraging academic achievements, technical skills, and enthusiasm to contribute effectively in a professional environment.Seeking an opportunity to apply and further develop skills in a dynamic work setting.</p>
            </div>
            {/* internships section */}
            <div className='m-3 p-3 rounded  opacity-95'>
                <h1 className="Experience my-2 font-bold text-xl ">Experience</h1>

                <Internship name={'Data Science'} duration={'Jun-2023'} organization={"SmartInternz"}
                    items={['Enhanced data analytics capabilities using Python, resulting in significant improvements in data cleaning and visualization techniques', 'Established and implemented a regression model to predict taxi fares, demonstrating proficiency in machine learning algorithms. Created a classification model for H1N1 vaccine prediction, showcasing expertise in data preprocessing, feature engineering, and model evaluation.','Strengthened Python skills by leading a team to solve complex coding challenges, resulting in a 40 percent reduction in error rates and a 25 percent boost in application performance']}
                />


            </div>

            {/* Education section */}
            <div className='m-3 p-3 rounded  opacity-95'>
                <h1 className="Education my-2 font-bold text-xl">Education</h1>
                <div className="internship_2 p-3 my-1">
                    <span className='flex items-center justify-between'>
                        <h1 className='font-semibold text-lg'>Bachelor of Technology (B.Tech)</h1>
                        <span className='flex justify-center items-center gap-3'>
                            <IoCalendar /><h4 className='font-bold text-md'>2020 - 2024</h4>
                        </span>
                    </span>
                    <h1 className=''> Computer Science and Engineering</h1>
                    <span className='flex items-center justify-between'>
                        <h6 className='text-sm'>Sri Mittapalli College Of Engineering</h6>
                        <span className='flex justify-center items-center gap-3'>
                            <h4 className=' text-sm'>7.34 CGPA</h4>
                        </span>
                    </span>
                </div>
            </div>

            {/* Skills section */}
            <div className="m-3 p-3 rounded ">
                <h1 className="Skills my-2 font-bold text-xl ">Skills</h1>
                <div className="p-3 my-1">
                    <Button skill={'python programming'} />
                    <Button skill={'mysql'} />
                    <Button skill={'PowerBI'} />
                    <Button skill={'EXCEL'} />
                    <Button skill={'Statistical Analysis'} />
                    <Button skill={'Data Validation'} />
                    <Button skill={'Data Modeling'} />
                    <Button skill={'Data Gathering'} />
                    <Button skill={'Data Cleaning'} />
           
                </div>

            </div>

            {/* Certification section */}
            <div className='m-3 p-3 rounded '>
                <h1 className="Certifications my-2 font-bold text-xl">Certifications</h1>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1'>

                <Certificate name={'Earned Data Analytics job simulation certificate'} duration={'Jun 2024'} organization={'ACCENTURE NORTH AMERICA'} skills={'Excel, Python'} url={'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_t8RdYbECN62bBDMHf_1718532062090_completion_certificate.pdf'} />

                <Certificate name={'Earned Data Science Job simulation certificate'} duration={'Jun 2024'} organization={'BRITISH AIRWAYS.'} skills={'Python, Data Science'} url={'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_t8RdYbECN62bBDMHf_1718437448974_completion_certificate.pdf'} />

                <Certificate name={'Data Science Intership certificate'} duration={'Jul 2023'} organization={'Yhills Edutech'} skills={'Python, Data Science'} url={'YHIcc-5004922'} />

                </div>
            </div>

            {/* Projects section */}
            <div className='m-3 p-3 rounded '>
                <h1 className="Projects my-2 font-bold text-xl ">Projects</h1>

                <Project name={'Identifying Bone Tumor by using X-Ray Images'} duration={'Jan 2024 - Apr 2024'} items={['Recognized for achieving high accuracy in tumor detection 96 percent using the trained CNN model.',' Successfully integrated FTP functionality for secure and efficient data transfer.','Created a user-friendly graphical interface using Tkinter for seamless interaction.','Technologies Used : Python, Computer vision and machine libraries , Deep learning libraries(CNN), OPEN CV, KERAS AND TENSORFLOW']} skills={' Machine Learning, Python and Image Processing'} url={'https://github.com/srinu-jonnada/Bone_Tumor_Prediction'} />

                <Project name={'Predictive Maintenance Project: Air compressors using sensor data from the MetroPT-3'} duration={'Nov 2023 - Dec 2023'} items={['Developed and deployed sophisticated image segmentation and classification methods, increasing tumor detection accuracy by 35 percent and providing comprehensive analysis for enhanced treatment planning and research','Provided actionable insights to optimize maintenance schedules and improve operational efficiency.']} skills={'Python, Machine Learning, Tensorflow, Keras, Pandas & Numpy'} url={'https://github.com/srinu-jonnada/Air_compressors-metropt-3-_project'} />

               

            </div>
        </div>
            <div  className='flex justify-end items-end p-1 text-4xl rounded-full cursor-pointer dark:bg-white dark:text-black dark:border-white fixed bottom-0 right-0 z-10 bg-black text-white dark:bg-white dark:text-black'>
            <button onClick={toTop}><FaArrowCircleUp/></button>
            </div>
        </>
    )
}

export default Details