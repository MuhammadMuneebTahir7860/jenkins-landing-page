import JenkinsLogo from '../../assets/JenKinsLogo-removebg-preview.png';
import './style.css';
export default function jenkinsTitle() {
    return (
        <div>
            <div className="container-fluid titleContainer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-1"></div>
                    <div className="col-lg-4 col-md-5">
                        <img src={JenkinsLogo} alt="JenKins-Logo" id="logoImg"  className="img-fluid"/>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <h1 id="page-title"><strong>Jenkins</strong></h1>
                        <p><strong>Build great things at any scale</strong></p>
                        <p>
                            The leading open source automation server, Jenkins provides
                            hundreds of plugins to support building, deploying and automating
                            any project.</p>
                        <div className='container'>
                            <div className='row'>
                                <a className='btn btn-secondary m-1' href='/doc/'>Documentation</a>
                                <a className='btn btn-primary m-1' href='/download/'>Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-1"></div>
                </div>
            </div>
        </div>
        </div>
    );
}