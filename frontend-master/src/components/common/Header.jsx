import React from 'react'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'; 
import ImgLogo from '../../assets/img/header-logo.svg'

const Header = () => {
    const dispatch = useDispatch();
    return (
        <section>
            <nav class="nav">
                <div class="nav-menu flex-row">
                    <div class="nav-brand">
                    <div class="logo">
                        <a onClick={() => dispatch(push("/"))} class="text-green"><img   src={ImgLogo} alt="nav-brand" /></a>
                        </div>
                    </div>
                    <div class="toggle-collapse">
                        <div class="toggle-icons">
                            <i class="fas fa-bars"></i>
                        </div>
                    </div>
                    <div>
                        <ul class="nav-items">
                            <li class="nav-link active">
                                <a onClick={() => dispatch(push("/"))}>Home</a>
                            </li>
                            <li class="nav-link">
                                <a onClick={() => dispatch(push("/favourites"))} >Tourist Attractions</a>
                            </li>
                            <div onClick={() => dispatch(push("/favourites"))} class="menus">
                            <li class="nav-link">
                                <a href="/favourites">Favourite</a>
                            </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header
