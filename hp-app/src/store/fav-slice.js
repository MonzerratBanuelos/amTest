import { createSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
    name: 'fav',
    initialState: {
        favList: [],
        showFav: false
    },
    reducers: {
        addFavorite(state, action) {
            const newFav = action.payload;
            //Check if it already exist
            const existingFav = state.favList.find((fav) => fav.name === newFav.name);
            if (existingFav || state.favList.length >= 5) {
                console.log('ya existo gg')
            } else {
                state.favList.push({
                    image: newFav.image,
                    name: newFav.name,
                    id: newFav.id
                })
            }
        },
        removeFav() { },
        setShowFav(state) {
            state.showFav = true
        }
    }
})
export const favActions = favSlice.actions;

export default favSlice