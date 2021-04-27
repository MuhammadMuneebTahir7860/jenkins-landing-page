import './support.css';
import SupportPicture1 from '../../assets/support1.png';
import SupportPicture2 from '../../assets/support2.png';
import SupportPicture3 from '../../assets/support3.png';
import SupportPicture4 from '../../assets/support4.png';
import SupportPicture5 from '../../assets/support5.png';
import SupportPicture6 from '../../assets/support6.png';
import SupportPicture7 from '../../assets/support7.png';

export default function Support() {
    return (
        <div className='container-fluid support-section'>
            <p className='text-center'>
                <strong>We thank the following organizations for their major commitments to support the Jenkins project.</strong>
            </p>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-2 support-section-img">
                        <img src={SupportPicture1} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-3 col-md-3 support-section-img">
                        <img src={SupportPicture2} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-lg-3 col-md-3 support-section-img">
                        <img src={SupportPicture3} alt=""className='img-fluid' />
                    </div><div className="col-lg-3 col-md-3 support-section-img">
                        <img src={SupportPicture4} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-lg-2 col-md-2 support-section-img">
                        <img src={SupportPicture5} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-lg-3 col-md-3 support-section-img">
                        <img src={SupportPicture6} alt=""className='img-fluid' />
                    </div>
                    <div className="col-lg-3 col-md-3 support-section-img">
                        <img src={SupportPicture7} alt=""className='img-fluid' />
                    </div>
                </div>
            </div>
            <p className='text-center'>
                <strong>We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.</strong>
            </p>
            <div className="row">
                <div className="col-lg-1 col-md-2 col-sm-2 text"></div>
                <div className="col-lg-1 col-md-2 col-sm-2 text">Atlassian</div>
                <div className="col-lg-1 col-md-2 col-sm-2 text">Datadog</div>
                <div className="col-lg-1 col-md-3 col-sm-3 text">Mac Cloud</div>
                <div className="col-lg-1 col-md-2 col-sm-2 text">PagerDuty</div>
                <div className="col-lg-1 col-md-2 col-sm-2 text">Sentry</div>
                <div className="col-lg-1 col-md-2 col-sm-2 text">XMission</div>
                <div className="col-lg-2 col-md-3 col-sm-4 text">Tsinghua University</div>
                <div className="col-lg-1 col-md-2 col-sm-2 text">Fastly</div>
                <div className="col-lg-1 col-md-2 col-sm-2 text">SpinUp</div>
                <div className="col-lg-1 col-md-2 col-sm-2 text">IBM</div>

            </div>
        </div>
    )
}