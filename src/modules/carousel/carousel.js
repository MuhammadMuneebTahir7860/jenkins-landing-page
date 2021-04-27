import Slider1 from '../../assets/slider1.JPG';
import Slider2 from '../../assets/slider2.JPG';
import Slider3 from '../../assets/slider3.JPG';
import Slider4 from '../../assets/slider4.JPG';
import Slider5 from '../../assets/slider5.JPG';

export default function Craousel(){
    return(
        <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Slider1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Slider2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Slider3} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Slider4} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Slider5} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
    )
}