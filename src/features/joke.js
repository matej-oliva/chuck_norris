import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { random } from "lodash";
import { jokeByCategory, randomJoke, searchJokesByText } from "../api/jokeRequests";

const initialState = {
	id: null,
	value: "",
	url: "",
	categories: [],
	created_at: "",
	icon_url: "",
	updated_at: "",
};

export const jokeSlice = createSlice({
	name: "joke",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchRandomJoke.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(fetchByCategory.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(fetchByText.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const fetchRandomJoke = createAsyncThunk("/random", async () => {
	return randomJoke();
});

export const fetchByCategory = createAsyncThunk("/random?category", async (category) => {
	return jokeByCategory(category);
});

export const fetchByText = createAsyncThunk("/search", async (query) => {
	const arrayOfJokes = await searchJokesByText(query);
	return arrayOfJokes.result[random(arrayOfJokes.result.length-1)];
});

export const currentJoke = (state) => state.joke;

export default jokeSlice.reducer;
