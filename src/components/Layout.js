import {
	makeStyles,
	Drawer,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	AppBar,
	Toolbar,
} from "@material-ui/core";
import { SubjectOutlined, AddCircleOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240;
const menuItems = [
	{
		text: "My Notes",
		icon: <SubjectOutlined color="secondary" />,
		path: "/",
	},
	{
		text: "Create Note",
		icon: <AddCircleOutlined color="secondary" />,
		path: "/create",
	},
];
const useStyles = makeStyles({
	page: {
		background: "#f9f9f9",
		width: "100%",
		padding: "2em",
	},
	drawer: {
		width: drawerWidth,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	active: {
		background: "#f4f4f4",
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
	},
});
function Layout({ children }) {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();
	const [date, setDate] = useState(() => new Date().toLocaleTimeString());

	useEffect(() => {
		const timer = setTimeout(
			() => setDate(new Date().toLocaleTimeString()),
			1000
		);
		return () => {
			clearTimeout(timer);
		};
	}, [date]);
	return (
		<div style={{ display: "flex" }}>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<Typography>{`${date}`}</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				anchor="left"
				classes={{ paper: classes.drawerPaper }}
			>
				<div>
					<Typography
						variant="h5"
						style={{ textAlign: "center", paddingTop: "1em" }}
					>
						Notes IO
					</Typography>
				</div>

				<List>
					{menuItems.map((item) => (
						<ListItem
							button
							key={item.text}
							onClick={() => history.push(item.path)}
							className={
								location.pathname === item.path &&
								classes.active
							}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText>{item.text}</ListItemText>
						</ListItem>
					))}
				</List>
			</Drawer>
			<div
				className={classes.page}
				style={{ position: "relative", top: "50px" }}
			>
				{children}
			</div>
		</div>
	);
}

export default Layout;
