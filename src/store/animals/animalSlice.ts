import { createSlice } from '@reduxjs/toolkit'

export const animalSlice = createSlice({
    name: 'animal',
    initialState: {
        animals: [],
    },
    reducers: {
        setAnimals: (state, { payload }) => {
            state.animals = payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setAnimals } = animalSlice.actions