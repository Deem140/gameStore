import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiKey from "../../utils/apiKey";

const url = `https://rawg.io/api/games?key=${apiKey}&dates=2022-01-01,2023-09-26&ordering=-added`

const initialState = {
    gamesArray: [ ],
    isLoading: false,
    errMsg: "",
}

export const videogamesFetch = createAsyncThunk(
    "games/videogamesFetch",// action tyoe
    async () => {
        const response = await axios.get(url);
        if(!response.ok) {
            console.log(response, "Fetch results!")
            return Promise.reject("Unable to fetch, status: " + response.status);
        }else {
            // const data = await response.json();
            return response.data
        }
        // .then(data => {
        //     // console.log(data, "API get call data")
        //     nextGameListUrl = data.next ? data.next : null;
        //     gamesArray.push(data.data.results)
        // })
        // .catch( err => {
        //     console.log(err)
        // })
    }                        //payload creator
)

const gameSlice = createSlice({
    name: "games",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(videogamesFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.gamesArray = action.payload;
        });
        builder.addCase(videogamesFetch.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(videogamesFetch.rejected, (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : "Fetch failed"
        });
    }
});

export const selectAllGames = (state) => {
    console.log(state.games.gamesArray)
}
export const gameReducer = gameSlice.reducer;