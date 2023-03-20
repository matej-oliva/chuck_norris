import { Box } from "@mui/material";

export function InputField({children}) {
	return (
		<Box
			sx={{
				background: (theme)=>
					theme.palette.gradient.radial,
				border: "1px black solid",
				borderRadius: "3px",
				height: "40px",
				alignItems: "center",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				p: "10px",
				mt: "20px",
			}}
		>
			{children}
		</Box>
	);
}
