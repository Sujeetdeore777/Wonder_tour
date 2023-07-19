import React,{useState, useEffect} from 'react'
import Imglike from "../../assets/img/like-icon.svg"
import { useDispatch, useSelector } from 'react-redux'
import { addFavourite } from '../../reducks/favourites/operations'
import { getFavourites } from '../../reducks/favourites/selectors'
import { push } from 'connected-react-router'
const Thumbnail = ({place}) => {
    const dispatch = useDispatch();
    const clickFavourite = (place) => {
      dispatch(addFavourite(place));
    };
    const tourist = () => {
      dispatch(push('/detail-page'))
    }
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
    //     <div class="thumbnail">
    //     {showLikeButton && (<div class="like">
    //     <img src={Imglike} onClick={() =>{clickFavourite(place)} } alt="" />
    //     </div>)}
    //     <img src={place.image} alt="" />
    //     <p class="thumbheading">{place.name}</p>
    //     <p class="thumbtext">
    //        {place.description}
    //     </p>
    // </div> 

    <div class="blog">
    <div class="blog-img">
    {showLikeButton && (<div class="like">
         <img id="like"src={Imglike} onClick={() => {clickFavourite(place)} } alt="" />
         </div>)}
         <img onClick={tourist} src={place.image} alt="" />
    </div>
    <div class="blog-contents">
        <h2 class="thumbheading">{place.name}</h2>
        <p class="thumbtext">{place.description}</p>
    </div>
</div>    
    )
}

export default Thumbnail
