import React from "react";
import { useState } from "react";

function useValidate(defaultValue = "") {
	const [state, setState] = useState(defaultValue);
	const [stateError, setStateError] = useState(false);
	const validate = (value) => {
		setState(value);
		setStateError(false);
		if (!value) {
			setStateError(true);
			return true;
		}
		return false;
	};
	return [state, stateError, validate];
}

export default useValidate;
