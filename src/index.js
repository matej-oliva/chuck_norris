import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchCategoryList } from "./features/categoryList";
import { fetchRandomJoke } from "./features/joke";
import { CssBaseline } from "@mui/material";
import { GlobalTheme } from "./utils/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch(fetchCategoryList());
store.dispatch(fetchRandomJoke());

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalTheme>
				<CssBaseline/>
				<App />
			</GlobalTheme>
		</Provider>
	</React.StrictMode>
);
