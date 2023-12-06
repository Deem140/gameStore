import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { store } from '../../app/store';
import { gameReducer, videogamesFetch } from './videoGameSlice';
import apiKey from '../../utils/apiKey';
import GameCard from './GameCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAllGames } from './videoGameSlice';
import "./gameCard.css"
import "../../Pages/pages.css";
let nextGameListUrl = null;

const url = `https://rawg.io/api/games?key=${apiKey}&dates=2022-01-01,2023-08-30&ordering=-added`

const GameCardList = (props) => {

    // const gameList = useSelector(selectAllGames);
    // console.log(gameList, "gameList!!")

    const isLoading = useSelector((state) => state.isLoading);
    const errMsg = useSelector((state) => state.errMsg);
    
    const [games, setGames] = useState([ ]);

    useEffect(() => {
        axios.get(url)
        .then(data => {
            // console.log(data, "API get call data")
            nextGameListUrl = data.next ? data.next : null;
            setGames(data.data.results)
        })
        .catch( err => {
            console.log(err)
        })
    }, [])

    return (
          <div className = "products">
                {games.map((game) => {
                    return (
                        <GameCard game={game} key={game.id}/>
                    )
                })}
          </div>
        
    )
}

export default GameCardList