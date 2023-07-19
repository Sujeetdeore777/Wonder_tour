import React, { useEffect, useState } from 'react'
import { addFavourite } from '../../reducks/favourites/operations'
import { getFavourites } from '../../reducks/favourites/selectors'
import { useSelector, useDispatch } from 'react-redux'
import Imglike from '../../assets/img/like-icon.svg'
import Places from '../../containers/Places'
import { deleteFavourite } from '../../reducks/favourites/operations'

const Card = ({ place,favourite }) => {
  const dispatch = useDispatch();
  const clickFavourite = (place) => {
    dispatch(addFavourite(place));
  };
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);
  useEffect(() => {
    let favoritePlace = favourites.filter(
      (favourite) => favourite.id == place.id
    );
    if (favoritePlace.length > 0) {
      setShowLikeButton(false);
    }
  }, [favourites]);

  return (
    <>
      <div className="gridcontent row">
        <div className="image">
          <img className="mainimage" src={ place.image} alt="" />
          <div className="like">
             {/* {showLikeButton && (<div class="like">
         <img id="like"src={Imglike} onClick={() => {clickFavourite(place)} } alt="" />
         </div>)} */}
          <img src={Imglike} onClick={() => {clickFavourite(place)} } alt="" />
          </div>
        </div>
        <div className="textcontent">
          <div className="gridheading">
            <h1>{place.name}</h1>
          </div>
          <div className="gridsubheading">
            <h2>{place.place_type}</h2>
          </div>
          <div className="gridtext">
            <p>{place.time_to_travel}</p>
            <p>
              {place.description}
            </p>
          </div>
          <div className="input-button">
            <a href={place.googel_map_link} target="_blank"> Directions </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
