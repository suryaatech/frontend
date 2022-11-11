import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Layanan from './Pages/Layanan.js'
import Navbar from './Components/Navbar.js'
import NavbarBottom from './Components/NavbarBottom.js';
import Feedback from './Pages/Feedback.js'
import Kontak from './Pages/Kontak.js'
import PostFeedback from './Pages/PostFeedback.js'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
	<Route path="/" element={<Home />} />
	<Route path="layanan" element={<Layanan />}  />
	<Route path="about" element={<About />} />
	<Route path="kontak" element={<Kontak />} />
	<Route path="feedback" element={<Feedback />} />
	<Route path="post-feedback" element={<PostFeedback />} />
      </Routes>
	<div className="pt-24">
      <NavbarBottom />
</div>
    </div>
  );
}

export default App;
