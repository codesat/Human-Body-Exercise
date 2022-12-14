
import './App.css';
import Email from './components/Emails/Email';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonials/Testimonial';

function App() {
  return (
    <div className="App">
     <Hero/>
     <Programs/>
     <Reasons/>
     <Plans/>
     <Testimonial/>
     <Email/>
     <Footer/>
    </div>
  );
}

export default App;
