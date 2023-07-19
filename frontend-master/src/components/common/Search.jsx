import React, {useState} from 'react'
import BackImg from '../../assets/img/background-img.png'
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Search = () => {
    const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitAction = () => {
    dispatch(push("/places?search=" + search));
  };

    return (
    <>
    {/* <section className="firstpage">
            <img src="../assets/img/background-img.png" alt="" />
            <div className="shade"></div>
          
    <form onSubmit={submitAction}>
      <div id="form-element">
                <h1>Let's Travel the World</h1>
                <input id="navee" className="search" type="text" onChange={inputSearch} placeholder="Search your Destination" />
                <a  onclick={()=>console.log("test")}>
          <img className="searchicon"  onclick={()=>{alert("test")}} src={Imgsearch} alt="" />
          </a>
            </div>
        </form>  
        </section>   */}

        <section className="firstpage">
            <img src={BackImg} alt="" />
            <div className="shade"></div>
           
            <form onSubmit={submitAction}>
            <div id="form-element">
                <h1>Let's Travel the World</h1>
                <input id="navee" className="search" type="text" onChange={inputSearch} placeholder="Search your Destination" />
                <a onclick={()=>console.log("test")}></a>
                <span><i className="fas fa-search" onclick={()=>{alert("test")}}></i></span>
            </div>  
            </form>
        </section>   
     
     </>
    )
}

export default Search
