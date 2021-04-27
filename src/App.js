import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './commonComponents/header/header';
import JenkinsTitle from './modules/JenkinsTitle/jenkinsTitle';
import Craousel from './modules/carousel/carousel';
import Features from '../src/commonComponents/features/features';
import Video from './modules/video/video';
import Events from './commonComponents/events/events';
import BlogPosts from './commonComponents/BlogPosts/blogPost';
import Support from './modules/support/support';
import Footer from './commonComponents/footer/footer';
function App() {
  return (
    <div>
      <Header/>
      <JenkinsTitle/>
      <Craousel/>
      <Features />
      <Video />
      <Events/>
      <BlogPosts/>
      <Support />
      <Footer />
    </div>
  );
}

export default App;
