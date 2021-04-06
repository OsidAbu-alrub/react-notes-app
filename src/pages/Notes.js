import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Container, Typography } from "@material-ui/core";
import Card from "../components/CardNote";

export default function Notes() {
	const [notes, setNotes] = useState(
		() => JSON.parse(window.localStorage.getItem("notes")) || []
	);

	useEffect(() => {
		window.localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const handleDelete = (id) =>
		setNotes((prevState) =>
			prevState.filter((val) => val.id + "" !== id + "")
		);

	return (
		<Container>
			{notes.length === 0 ? (
				<Typography variant="h2">
					You haven't created any notes yet!
				</Typography>
			) : (
				<Grid container spacing={3}>
					{notes.map((note) => (
						<Grid item key={note.id} xs={12} lg={4} md={6}>
							<Card
								handleDelete={handleDelete}
								note={note}
							></Card>
						</Grid>
					))}
				</Grid>
			)}
		</Container>
	);
}
