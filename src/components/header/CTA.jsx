import React from 'react';
import CvSamuel from '../../assets/CvSamuel.pdf';
const CTA = () =>{
    return(
        <div className="cta">
            <a href={CvSamuel} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
    )
}

export default CTA;