import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux';
import React from 'react'

const GridContent = ({category}) => {
    const dispatch = useDispatch();
    return (
        <div className="gridcontent" onClick={()=>dispatch(push("/places?category="+category.id))} >
            <div className="hover-img">
                <div className="hover">
                <img src={category.image} alt="" />
                <p>{category.name}</p>
                </div>
            </div>
        </div>
    )
}

export default GridContent
