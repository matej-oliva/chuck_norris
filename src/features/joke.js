import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { random } from "lodash";
import {
	jokeByCategory,
	randomJoke,
	searchJokesByText,
} from "../api/jokeRequests";

const initialState = {
	id: null,
	value: "",
	url: "",
	categories: [],
	created_at: "",
	icon_url: "",
	updated_at: "",
	status: "",
	msg: "",
};

export const jokeSlice = createSlice({
	name: "joke",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchRandomJoke.fulfilled, (state, action) => {
			return action.payload = {
				...action.payload,
				status: "success",
				msg: `Successfuly found new random joke! 🤠`,
			};
		});
		builder.addCase(fetchByCategory.fulfilled, (state, action) => {
			return action.payload = {
				...action.payload,
				status: "success",
				msg: `Successfuly found a joke in ${action.meta.arg} category!`,
			};
		});
		builder.addCase(fetchByText.fulfilled, (state, action) => {
			let status = "";
			let msg = "";

			if(action.payload === undefined || action.payload.value === ""){
					status = "warning";
					msg = "There is no joke containing these words. 😕";
			}else{
					status = "success";
					msg = "Successfuly found a joke with your desired text!";
			}
			return action.payload = {
				...action.payload,
				status: status,
				msg: msg,
			};
		});
		builder.addCase(fetchByText.rejected, (state, action) => {
			return action.payload = {
				...initialState,
				status: "error",
				msg: "Wrong input. The text must be at least 3 characters long and no longer than 120 characters.",
			};
		});
	},
});

export const fetchRandomJoke = createAsyncThunk("/random", async () => {
	return randomJoke();
});

export const fetchByCategory = createAsyncThunk(
	"/random?category",
	async (category) => {
		return jokeByCategory(category);
	}
);

export const fetchByText = createAsyncThunk("/search", async (query) => {
	const arrayOfJokes = await searchJokesByText(query);
	return arrayOfJokes.result[random(arrayOfJokes.result.length - 1)];
});

export const currentJoke = (state) => state.joke;

export default jokeSlice.reducer;
