import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
	Typography,
	Button,
	Container,
	makeStyles,
	TextField,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";
import useValidate from "./../hooks/useValidate";
import { useHistory } from "react-router";
const useStyles = makeStyles({
	space: {
		margin: "1em 0px",
		display: "block",
	},
});
export default function Create() {
	const classes = useStyles();
	const history = useHistory();
	const [title, titleError, validateTitle] = useValidate();
	const [details, detailsError, validateDetails] = useValidate();
	const [category, setCategory] = useState("money");

	const handleSubmit = (e) => {
		e.preventDefault();
		const t = validateTitle(title);
		const d = validateDetails(details);
		if (t || d) return;
		const notes = JSON.parse(window.localStorage.getItem("notes")) || [];
		notes.push({ title, details, category, id: uuidv4() });
		window.localStorage.setItem("notes", JSON.stringify(notes));
		history.push("/");
	};

	return (
		<Container>
			<Typography variant="h6" component="h2" color="textSecondary">
				Create a new note!
			</Typography>
			<form
				action="#"
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<TextField
					label="Title"
					variant="outlined"
					placeholder="e.g. Walk Dog"
					className={classes.space}
					value={title}
					onChange={(e) => validateTitle(e.target.value)}
					error={titleError}
					helperText={titleError && "Make Sure To Enter A Title*"}
					required
					fullWidth
				/>
				<TextField
					label="Details"
					variant="outlined"
					placeholder="e.g. Take dog on a really long walk"
					className={classes.space}
					value={details}
					onChange={(e) => validateDetails(e.target.value)}
					rows="5"
					error={detailsError}
					helperText={detailsError && "Make Sure To Enter Details*"}
					multiline
					required
					fullWidth
				/>
				<FormControl className={classes.space}>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup
						color="primary"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<FormControlLabel
							control={<Radio />}
							label="money"
							value="money"
						></FormControlLabel>

						<FormControlLabel
							control={<Radio />}
							label="todos"
							value="todos"
						></FormControlLabel>

						<FormControlLabel
							control={<Radio />}
							label="work"
							value="work"
						></FormControlLabel>

						<FormControlLabel
							control={<Radio />}
							label="reminders"
							value="reminders"
						></FormControlLabel>
					</RadioGroup>
				</FormControl>

				<Button
					variant="contained"
					color="secondary"
					type="submit"
					endIcon={<SendIcon></SendIcon>}
				>
					Submit
				</Button>
			</form>
		</Container>
	);
}
