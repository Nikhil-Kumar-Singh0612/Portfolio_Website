import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className='education-page' id='education'>
            <div className='education-content'>
                <div className='education-title'>
                    {"<Education />"}
                </div>
                <div className='edu'>
                    <div>
                        <div className='edu-year'>
                            2022 - 2024
                        </div>
                        <div className='edu-school' onClick={() => window.open('https://www.ufl.edu/')}>
                            University of Florida - Gainesville, FL; Class of 2024
                        </div>
                        <div>
                            Master of Science; Computer Science
                        </div>
                        <div>
                            GPA: 3.82/4.0
                        </div>
                    </div>
                    <div>
                        <div className='edu-year'>
                            2016 - 2020
                        </div>
                        <div className='edu-school' onClick={() => window.open('https://www.osmania.ac.in/')}>
                            Osmania University - Hyderabad, Telangana, India
                        </div>
                        <div>
                            Bachelor of Engineering; Computer Science
                        </div>
                        <div>
                            GPA: 8.82/10.0
                        </div>
                    </div>
                </div>
            </div>
            <div className='experience-content'>
                <div className='experience-title'>
                    {"<Experience />"}
                </div>
                <div className='exp'>
                    <div>
                        <div className='exp-year'>
                            Sep. 2023 - Present
                        </div>
                        <div className='exp-company' onClick={() => window.open('https://virtualreviewassist.net/')}>
                            Virtual Review Assist; Software Engineer/ Graduate Research Assistant
                        </div>
                    </div>
                    <div>
                        <div className='exp-year'>
                            May 2023 - Aug. 2023
                        </div>
                        <div className='exp-company' onClick={() => window.open('http://aws.amazon.com/')}>
                            Amazon Web Services (Amazon); Software Development Engineer Intern
                        </div>
                    </div>
                    <div>
                        <div className='exp-year'>
                            Dec. 2020 - Nov. 2021
                        </div>
                        <div className='exp-company' onClick={() => window.open('https://www.accenture.com/in-en')}>
                            Accenture; Associate Software Engineer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;