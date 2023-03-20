import { Box } from "@mui/material";
import { Text } from "./Text";

export function AppTitle() {
	return (
		<Box sx={{ mb: "20px" }}>
			<Text variant="h2" component="h1">
				Chuck Norris jokes
			</Text>
		</Box>
	);
}
