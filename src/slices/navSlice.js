import { createSlice } from '@reduxjs/toolkit';
// navSlice is primary layer that stores data(start location & destination) 
// that can be used any layer

const initialState = {
    origin: null,
    destination: null,
    traverlTimeInformation: null
} 

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.traverlTimeInformation = action.payload;
        },
    },
});



export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

// selectors: grab data
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.traverlTimeInformation;

export default navSlice.reducer;
