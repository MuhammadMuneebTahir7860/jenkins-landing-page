import './footer.css';
import Licence from '../../assets/license.png';

export default function Footer(){
    return(
        <div className='container-fluid footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <p  className='footer-text'> Imporve this page | Report a problem</p>
                        <img src={Licence} alt="" className='img-fluid'/>
                        <p className='footer-text'>The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.</p>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h1 className='under-Line'></h1>
                        <h5 className='footer-Headings'>Resources</h5>
                        <p className='footer-text'>Downloads</p>
                        <p className='footer-text'>Blog</p>
                        <p className='footer-text'>Documentation</p>
                        <p className='footer-text'>Plugins</p>
                        <p className='footer-text'>Security</p>
                        <p className='footer-text'>Contributing</p>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h1 className='under-Line'></h1>
                        <h5 className='footer-text'>Project</h5>
                        <p className='footer-text'>Structure and governance</p>
                        <p className='footer-text'>Issue Tracker</p>
                        <p className='footer-text'>Roadmap</p>
                        <p className='footer-text'>Github</p>
                        <p className='footer-text'>Jenkins on Jenkins</p>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <h1 className='under-Line'></h1>
                        <h5 className='footer-text'>Community</h5>
                        <p className='footer-text'>Events</p>
                        <p className='footer-text'>Mailing Lists</p>
                        <p className='footer-text'>Chats</p>
                        <p className='footer-text'>Special Interest Groups</p>
                        <p className='footer-text'>Twitter</p>
                        <p className='footer-text'>Reddit</p>
                    </div> 
                    <div className="col-lg-2 col-md-2">
                        <h1 className='under-Line'></h1>
                        <h5 className='footer-text'>Other</h5>
                        <p className='footer-text'>Code of Conduct</p>
                        <p className='footer-text'>Press information</p>
                        <p className='footer-text'>Merchandise</p>
                        <p className='footer-text'>Artwork</p>
                        <p className='footer-text'>Awards</p>
                    </div>
                </div>
            </div>
        </div>
    )
}