import { useState } from 'react';
import './features.css';
import FeatureImg1 from '../.././assets/featureImg1.JPG';
import FeatureImg2 from '../.././assets/featureImg2.JPG';
import FeatureImg3 from '../.././assets/featureImg3.JPG';
import FeatureImg4 from '../.././assets/featureImg4.JPG';
import FeatureImg5 from '../.././assets/featureImg5.JPG';
import FeatureImg6 from '../.././assets/featureImg6.JPG';
export default function Features() {
    const [rows, setFirstRow] = useState(
        [
            {
                icon: FeatureImg1,
                title: 'Continuous Integration and Continuous Delivery',
                description: 'As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.'
            },
            {
                icon: FeatureImg2,
                title: 'Easy installation',
                description: 'Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems.'
            },
            {
                icon: FeatureImg3,
                title: 'Easy configuration',
                description: 'Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help.'
            },
            {
                icon: FeatureImg4,
                title: 'Plugins',
                description: 'With hundreds of plugins in the Update Center, Jenkins integrates with practically every tool in the continuous integration and continuous delivery toolchain.'
            },
            {
                icon: FeatureImg5,
                title: 'Extensible',
                description: 'Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do.'
            },
            {
                icon: FeatureImg6,
                title: 'Distributed',
                description: 'Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster.'
            },
        ]

    )

    return (
        <div className="container">
            <div className='row'>
                {
                    rows.map((item) => {
                        return (
                            <div className='col-lg-4 col-md-6 columns'>
                                <img src={item.icon} alt="" className='featureImages img-fluid' />
                                <h5 className='featureHeading'>{item.title}</h5>
                                <p className='featureText'>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>


    )
}