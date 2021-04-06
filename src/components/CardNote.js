import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography, Avatar, makeStyles } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
	avatar: {
		backgroundColor: () => {
			const colors = ["red", "hotpink", "green", "blue"];
			const i = Math.floor(Math.random() * 4);
			return colors[i];
		},
	},
});
function CardNote({ note, handleDelete }) {
	const classes = useStyles();
	return (
		<div>
			<Card elevation={10}>
				<CardHeader
					avatar={
						<Avatar className={classes.avatar}>
							{note.category[0].toUpperCase()}
						</Avatar>
					}
					action={
						<IconButton onClick={() => handleDelete(note.id)}>
							<DeleteOutlined />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>

				<CardContent>
					<Typography variant="body2" color="textSecondary">
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default CardNote;
