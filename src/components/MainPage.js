import React from 'react';
import './MainPage.css';

const MainPage = () => {
    return (
        <div className='main-page'>
            <nav className='nav-bar' id='top'>
                {/* <div className="App-header"> */}
                <ul>
                    <li>
                        <a href='#about'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#education'>
                            Education & Experience
                        </a>
                    </li>
                    <li>
                        <a href='#skills'>
                            Skills & Languages
                        </a>
                    </li>
                    <li>
                        <a href='#awards'>
                            Awards & Interests
                        </a>
                    </li>
                </ul>
                {/* </div> */}
            </nav>
            <div className='page-content'>
                <div className='intro-image'>
                    <div className='intro-content'>
                        <div className='intro-head'>Hello, I'm</div>
                        <div className='bold-name'>
                            Nikhil Kumar Singh.
                        </div>
                        <div className='under-name'>
                            Software Developer & Computer Science Grad Student
                        </div>
                    </div>
                </div>
                <div className='intro-text'>
                    <div className='round-image'></div>
                    <div className='intro-text-name'>
                        Nikhil Kumar Singh
                    </div>
                    <p className='intro-text-creds'>
                        MS in Computer Science <br /> University of Florida <br /> Gainesville, FL
                    </p>
                    <p className='contact-info'>
                        <a href="mailto:nikhilkumarsingh0612@gmail.com">nikhilkumarsingh0612@gmail.com</a> <br /> <a href="mailto:nikhilkumarsingh@ufl.edu">nikhilkumarsingh@ufl.edu</a> <br /> (352)-664-0887
                    </p>
                    <div className='socials'>
                        <div onClick={() => window.open('https://github.com/Nikhil-Kumar-Singh0612')}>
                            <svg width="32px" height="32px" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                                <g fill="#FFFFFF">
                                    <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                                    <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                                </g>
                            </svg>                        </div>
                        <div onClick={() => window.open('https://www.linkedin.com/in/nikhil-kumar-singh-964693183/')}>
                            <svg width="30" height="30" style={{ "fillRule": "evenodd", "clipRule": "evenodd", "strokeLinejoin": "round", "strokeMiterlimit": "2" }} version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FFFFFF" d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z" />
                            </svg>
                        </div>
                    </div>
                    <div
                        className='download-cv-btn'
                        onClick={() => window.open('https://drive.google.com/file/d/18df89xrDWZdgTvJNqiyFegqNrsUOgCgm/view?usp=sharing')}
                    >
                        Download Resume
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;