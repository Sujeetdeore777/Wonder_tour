import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import GridContent from "../components/common/GridContent";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import Thumbnail from "../components/common/Thumbnail";
import ImgLogo from '../assets/img/header-logo.svg';
import Imgsearch from "../assets/img/searchicon.png";
import { getPlaces } from "../reducks/places/selectors";
import { getCategories } from "../reducks/categories/selectors";
import { fetchPlaces } from "../reducks/places/operations";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../reducks/categories/operations";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import videoImg from '../assets/img/video-background-img.png'
import curl2 from '../assets/img/curl-underliner-2.png'
import subsImg from '../assets/img/subscribe-background-img.png'
import map from '../assets/img/map-background-img.png'
import curl1 from '../assets/img/curl-underliner-1.svg'


const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);
  const categories = getCategories(selector);
  console.log(categories);
  console.log(places);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFromLocalStorage());
  }, []);

  // console.log(categories);

  return (
    <>
      <Header />
      <section className="section1">
        <Search img={Imgsearch} />
        <h5 class="hover-text">Natural Wonders in World</h5>
        <img id="shape-hover" src={curl1} alt="curl-underliner-1" />
        <div className="grid">
        { categories.results &&
           categories.results.map((category) => (
           <GridContent key={category.id} category={category} />
           ))}  
        </div>
        <h5 class="hover-text">Tourist Attractions in the World</h5>
        <img id="shape-hover" src={curl1} alt="curl-underliner-1" />
        <div class="gallery">
          <div class="row">
          {places.results &&
            places.results.map((place) => (
              <Thumbnail place={place} 
              />
            ))}
          </div>
        </div>
      </section>
        <section class="video-tour">
            <img class="video-tour-img" src={videoImg} alt="" />
            <div class="embed-con1">
                <center>
                    <p id="embed-con1-p">Discover<br />
                        Watch our video</p>
                    <img class="shape-video" src={curl2} alt="" />
                </center>
                <iframe id="video" src="https://www.youtube.com/embed/98H5AN_vfOY" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </section>
        <div class="subs-offer">
            <img class="subs-offer-img" src={subsImg} alt="" />
            <div class="subs-offer-subDiv">
                <center id="subs-offer-center">
                    <h2>Get 10% Off on Your Next Travel</h2>
                    <p>Maximum discount 1000$ per person</p>
                    <div class="subs-offer-flex">
                        <input class="inpt-btn" type="text" placeholder="Enter your email" />
                        <button class="btn">SUBSCRIBE</button>
                    </div>
                </center>
            </div>
        </div>
        <div>
            <a href='https://goo.gl/maps/TEsz7sUrdZ5JsrXc6' target="_blank"><img class="map" src={map} alt="" /></a>
        </div>
      <Footer />
    </>
  );
};

export default Home;
