import React, {useState, useEffect} from 'react';
import axios from "axios";
import FetchPopularGames from '../utils/FetchPopularGames';
import Header from '../Components/Header';
import GameCard from '../Features/games/GameCard';
import GameCardList from '../Features/games/GameCardList';
import TitleForm from '../Features/forms/TitleForm';
import GenreForm from '../Features/forms/GenreForm';
import CartList from '../Features/cart/CartList';
import ShoppingCart from '../Features/cart/shoppingCart';

import apiKey from '../utils/apiKey';
// import './index.css';
import '../index.css'
import './pages.css';

const getPlatformStr = (str) => {
        return str.map((e) => {
            return e.name
        })
}

const url = `https://rawg.io/api/games?key=${apiKey}&dates=2023-01-01, 2023-07-28&ordering=-added`

function ShopPage() {
    const [text, setText] = useState("")

    return (
        <div className='parent'>
            <div>
                <Header />
            </div>
                <h1>SHOP PAGE</h1>
            <div className='forms'>
                <TitleForm />
                <GenreForm />
            </div>
                <ShoppingCart />
                <CartList />

                {/* <FetchPopularGames /> */}
                <GameCardList />
        </div>
    )
}

export default ShopPage
   


