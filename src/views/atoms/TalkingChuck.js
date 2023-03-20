import { Box } from "@mui/material";

export function TalkingChuck() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-end",
				p: "25px",
			}}
		>
			<div className="bubble bubble-bottom-right">
				Lemme tell you a story...
			</div>
			<img
				id="chuckimage"
				height="146px"
				width="146px"
				src="/img/chuck.png"
				alt="chuck norris"
			></img>
		</Box>
	);
}
