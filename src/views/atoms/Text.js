import { Typography } from "@mui/material";

export function Text({children, white, ...props}) {
	return (
		<Typography color={white ? 'white' : 'initial'} sx={{fontFamily: 'Patrick Hand, cursive', my: '10px', mx: '15px'}} {...props}>
      {children}
		</Typography>
	);
}
