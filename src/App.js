import { Box } from "@mui/material";
import { AppTitle, TalkingChuck } from "./views/atoms";
import { DisplayedJoke } from "./views/molecules";
import { Footer, SearchForm } from "./views/organisms";

function App() {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				flex: "1 0 auto",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					mx: "auto",
					width: "90%",
					maxWidth: "600px",
				}}
			>
				<TalkingChuck />
				<AppTitle/>
				<SearchForm />
				<DisplayedJoke />
			</Box>
			<Footer />
		</Box>
	);
}

export default App;
