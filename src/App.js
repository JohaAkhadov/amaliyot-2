import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Katalog from "./pages/Katalog";
import Service from "./pages/Service";
import Stock from "./pages/Stock";
import Delivery from "./pages/Delivery";
import Diler from "./pages/Diler";
import News from "./pages/News";
import Stati from "./pages/Stati";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import KatalogProduct from "./pages/KatalogProduct";
import Cart from "./pages/Cart";
import Oformleniye from "./pages/Oformleniye";
import Profile from "./pages/Profile";
import Lichniye from "./pages/Lichniye";
import Istoriya from "./pages/Istoriya";
import Rekvizit from "./pages/Rekvizit";
import OforModal from "./pages/OforModal";
import ZakazInfo from "./pages/ZakazInfo";
import VideoInfo from "./pages/VideoInfo";
import NewsInfo from "./pages/NewsInfo";
import StatiInfo from "./pages/StatiInfo";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="katalog" element={<Katalog />}/>
        <Route path="service" element={<Service />}/>
        <Route path="stock" element={<Stock />}/>
        <Route path="delivery" element={<Delivery />}/>
        <Route path="diler" element={<Diler />}/>
        <Route path="news" element={<News />}/>
        <Route path="stati" element={<Stati />}/>
        <Route path="video" element={<Video />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="katalog-product/:id" element={<KatalogProduct />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="oformleniye" element={<Oformleniye />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="lichniye" element={<Lichniye />}/>
        <Route path="istoriya" element={<Istoriya />}/>
        <Route path="rekvizit" element={<Rekvizit />}/>
        <Route path="oformodal" element={<OforModal />}/>
        <Route path="zakazinfo" element={<ZakazInfo />}/>
        <Route path="video-info" element={<VideoInfo />}/>
        <Route path="news-info/:id" element={<NewsInfo />}/>
        <Route path="stati-info/:id" element={<StatiInfo />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
