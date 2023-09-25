import React from "react";
import './Awards.css';

const Awards = () => {
    return (
        <div className='awards-page' id='awards'>
            <div className='awards-content'>
                <div className='awards-title'>
                    {"<Awards />"}
                </div>
                <div className='awards'>
                    <div>
                        Graduate Research Assistantship
                    </div>
                    <div>
                        Won Third Prize in IEEE Explore 2021
                    </div>
                    <div>
                        Awarded for Academic Excellence and Dedication
                    </div>
                </div>
            </div>
            <div className='experience-content'>
                <div className='experience-title'>
                    {"<Interests />"}
                </div>
                <div className='interests'>
                    <div>
                        <div>
                            Cricket
                        </div>
                        <div>
                            Soccer
                        </div>
                        <div>
                            Fitness
                        </div>
                    </div>
                    <div>
                        <div>
                            Billiards
                        </div>
                        <div>
                            Music
                        </div>
                        {/* <div>
                            Fitness
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards;