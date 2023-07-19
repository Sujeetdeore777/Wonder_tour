import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import Card from "../components/common/Card";
import { fetchPlaces } from "../reducks/places/operations";
import { getPlaces } from "../reducks/places/selectors";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";

const Places = () => {
  const parsed = queryString.parse(window.location.search);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  console.log(places);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());

    if (parsed.search !== undefined) {
      setSearch(parsed.search);
    }
    if (parsed.category !== undefined) {
      setCategory(parsed.category);
    }
  }, []);
  useEffect(() => {
    if (search != null || category != null) {
      dispatch(fetchPlaces(search, category));
    }
  }, [search, category]);
  return (
    <>
      <Header />
      <section class="section2">
        <div class="gallery">
          <Search />
        </div>
        {<div class="heading1">Trips in USA</div>}
        <div class="grid">
        {places.results &&
          places.results.map((place) => (
            <Card place={place} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Places;
