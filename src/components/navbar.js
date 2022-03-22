import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FormModal from "./formModal";
import Grid from '@mui/material/Grid';


const NavBar = () => {
	return (
		<AppBar color="transparent" position="static">
			<Toolbar>
				<Grid container justifyContent="space-between">
					<Grid item >
						<Typography variant="h6">My Blog</Typography>
					</Grid>
					<Grid item>
						<FormModal />
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
