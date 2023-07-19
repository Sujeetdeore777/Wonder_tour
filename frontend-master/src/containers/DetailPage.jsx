import React from "react";
import FavCard from "../components/common/FavCard";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFavourites } from "../reducks/favourites/selectors";
import { useEffect } from "react";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import blog4 from '../assets/img/blog-4.png';
import colo1 from '../assets/img/colos-m-1.png';
import colo2 from '../assets/img/colos-m-2.png';
import colo3 from '../assets/img/colos-m-3.png';
import map from '../assets/img/map-background-img.png'
import location from '../assets/img/location.svg'

const DetailPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  console.log(favourites);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);

  return (
    <>
      <Header />
      <main>
            <section class="detail">
                <div>
                    <img class="detail-content" src={blog4} alt="blog-4" />
                </div>
                <div class="hover-img">
                    <img id="i" src={colo1} alt="" />
                    <img id="h" src={colo2} alt="" />
                    <img src={colo3} alt="" />
                </div>
            </section>
            <section class="main-2">
                <div class="desc">
                    <h2>Temple of Artemis at Ephesus</h2>
                    <p>The Temple of Artemis (or Artemision), sometimes called the Temple of Diana, was a Greek temple
                        located in Ephesus (present-day Turkey).
                        The temple was dedicated to the goddess Artemis and was actually destroyed and rebuilt three
                        times, the final of which was considered one
                        of the Seven Ancient Wonders. By 401 AD, the temple had been destroyed, and only foundations and
                        fragments of the last temple remain.
                        While little is known about the temple’s appearance, Antipater of Sidon, who described the Seven
                        Wonders said:

                        “…when I saw the house of Artemis that mounted to the clouds, those other marvels lost their
                        brilliancy, and I said, ‘Lo, apart from Olympus,
                        the Sun never looked on aught so grand.’”

                        The Temple of Artemis (or Artemision), sometimes called the Temple of Diana, was a Greek temple
                        located in Ephesus (present-day Turkey).
                        The temple was dedicated to the goddess Artemis and was actually destroyed and rebuilt three
                        times, the final of which was considered one
                        of the Seven Ancient Wonders. By 401 AD, the temple had been destroyed, and only foundations and
                        fragments of the last temple remain.
                        While little is known about the temple’s appearance, Antipater of Sidon, who described the Seven
                        Wonders said:

                        “…when I saw the house of Artemis that mounted to the clouds, those other marvels lost their
                        brilliancy, and I said, ‘Lo, apart from Olympus,
                        the Sun never looked on aught so grand.’”

                        The Temple of Artemis (or Artemision), sometimes called the Temple of Diana, was a Greek temple
                        located in Ephesus (present-day Turkey).
                        The temple was dedicated to the goddess Artemis and was actually destroyed and rebuilt three
                        times, the final of which was considered one
                        of the Seven Ancient Wonders. By 401 AD, the temple had been destroyed, and only foundations and
                        fragments of the last temple remain.
                        While little is known about the temple’s appearance, Antipater of Sidon, who described the Seven
                        Wonders said:

                        “…when I saw the house of Artemis that mounted to the clouds, those other marvels lost their
                        brilliancy, and I said, ‘Lo, apart from Olympus,
                        the Sun never looked on aught so grand.’”

                        The Temple of Artemis (or Artemision), sometimes called the Temple of Diana, was a Greek temple
                        located in Ephesus (present-day Turkey).
                        The temple was dedicated to the goddess Artemis and was actually destroyed and rebuilt three
                        times, the final of which was considered one
                        of the Seven Ancient Wonders. By 401 AD, the temple had been destroyed, and only foundations and
                        fragments of the last temple remain.
                        While little is known about the temple’s appearance, Antipater of Sidon, who described the Seven
                        Wonders said:</p>
                </div>
                </section>
        </main>
        <div class="map-loc">
            <img class="map" src={map} alt="usa-map" />
            <img class="location" src={location} alt="location-icon" />
        </div>
      <Footer />
    </>
  );
};

export default DetailPage;
