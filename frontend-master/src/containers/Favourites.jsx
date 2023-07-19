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

const Favourites = () => {
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
      <section class="section2">
        <div class="gallery">
          <Search />
        </div>
        <div class="heading1">Favourites in USA</div>
        <div class="grid">
          {favourites.map((favourite) => (
            <FavCard favourite={favourite} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favourites;
