import { Cached, Search } from "@mui/icons-material";
import {
	Box,
	Button,
	Divider,
	IconButton,
	InputBase,
	MenuItem,
	Select,
	styled,
	Tooltip,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOfCategories } from "../../features/categoryList";
import {
	fetchByCategory,
	fetchByText,
	fetchRandomJoke,
} from "../../features/joke";
import { InputField } from "../atoms";

const CustomInputField = styled(Select)(({ theme }) => ({
	"& .MuiInputBase-input": {
		background: theme.palette.gradient.radial,
		border: "1px black solid",
		borderRadius: "3px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: "0px",
		paddingRight: "20px",
		paddingLeft: "20px",
		height: "40px !important",
	},
}));

export function SearchForm({ setSnack }) {
	const [category, setCategory] = useState("");
	const [searchText, setSearchText] = useState("");
	const categories = useSelector(listOfCategories);

	const dispatch = useDispatch();

	const handleSnack = useCallback(
		async (data) => {
			setSnack({
				open: true,
				msg: data.msg,
				state: data.status,
			});
		},
		[setSnack]
	);

	const getAJoke = useCallback(async () => {
		return new Promise((resolve) => {
			resolve(dispatch(fetchRandomJoke()));
		}).then(async (res) => {
			handleSnack(res.payload);
		});
	}, [dispatch, handleSnack]);

	const getAJokeByCategory = useCallback(
		async (category) => {
			return new Promise((resolve) => {
				resolve(dispatch(fetchByCategory(category)));
			}).then(async (res) => {
				setCategory(category);
				handleSnack(res.payload);
				setSearchText("");
				setCategory("");
			});
		},
		[dispatch, handleSnack]
	);

	const searchByText = useCallback(async () => {
		return new Promise((resolve) => {
			resolve(dispatch(fetchByText(searchText)));
		}).then(async (res) => {
			handleSnack(res.payload);
			setCategory("");
		});
	}, [dispatch, handleSnack, searchText]);

	const reset = useCallback(() => {
		setCategory("");
		setSearchText("");
		getAJoke();
	}, [getAJoke]);

	return (
		<>
			<Box sx={{ width: "fit-content" }} variant="text">
				<Tooltip title="Get a new random joke">
					<Button
						color="secondary"
						variant="outlined"
						aria-label="Get a new random joke button"
						type="button"
						onClick={reset}
						endIcon={<Cached />}
					>
						Reset
					</Button>
				</Tooltip>
			</Box>
			<InputField>
				<InputBase
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							searchByText();
						}
					}}
					sx={{ width: "100%" }}
					placeholder="Search new Chuck Norris joke..."
					inputProps={{
						"aria-label": "Search new Chuck Norris joke",
					}}
					value={searchText}
					onChange={(event) => {
						setSearchText(event.target.value);
					}}
				/>
				<IconButton aria-label="search" onClick={searchByText}>
					<Search />
				</IconButton>
			</InputField>
			<Divider sx={{ my: "10px" }}>OR</Divider>
			<Select
				displayEmpty
				inputProps={{ "aria-label": "Search by category" }}
				MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
				value={category}
				onChange={(e) => {
					e.target.value === ""
						? setCategory("")
						: getAJokeByCategory(e.target.value);
				}}
				input={<CustomInputField />}
			>
				<MenuItem value="" sx={{ color: "#b5b5b5" }}>
					<em>Search by category</em>
				</MenuItem>
				{categories &&
					categories.map((category, index) => (
						<MenuItem key={index} value={category}>
							{category}
						</MenuItem>
					))}
			</Select>
		</>
	);
}
