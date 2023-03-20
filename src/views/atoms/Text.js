import { Typography } from "@mui/material";

export function Text({ children, white, ...props }) {
	return (
		<Typography
			color={white ? "white" : "initial"}
			sx={{
				my: "10px",
				mx: "15px",
			}}
			className="font"
			{...props}
		>
			{children}
		</Typography>
	);
}
