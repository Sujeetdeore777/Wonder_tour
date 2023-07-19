import React from 'react'
import Imgliked from '../../assets/img/liked.svg'
import Favourites from '../../containers/Favourites'
import { useDispatch } from 'react-redux'
import { deleteFavourite } from '../../reducks/favourites/operations'

const FavCard = ({favourite}) => {
    const dispatch = useDispatch()
    return (
        <div className="gridcontent row">
        <div className="image">
           <img className="mainimage" src={favourite.image} alt="" />
           <div className="like">
              <img src={Imgliked} onClick={() => dispatch(deleteFavourite(favourite.id))} alt="" />
        </div>
          </div>
           <div className="textcontent">
         <div className="gridheading">
              <h1>{favourite.name}</h1>
        </div>
        <div className="gridsubheading"> 
            <h2>{favourite.place_type}</h2>
        </div>
         <div className="gridtext">
         <p>{favourite.time_to_travel}</p>
              <p>
                {favourite.description}
             </p>
        </div>
         <div className="input-button">
            <a className="direction" href={favourite.googel_map_link}>Directions</a>
         </div>
      </div>
      </div>
    )
}

export default FavCard
