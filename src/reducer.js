export const inititalState = {
	busket: [],
	user: null
};

// we have set our reducer or store keeper
function reducer(state, action) {
	console.log(action);
	switch (action.type) {
		// for user we have to add another case
		case "SET_USER":
			return {
				...state,
				user: action.user
			};
		case "ADD_TO_BUSKET":
			// logic here
			return {
				...state,
				busket: [...state.busket, action.item]
			};
			break;
		case "REMOVE_FROM_BUSKET":
			// logic here
			const newBusket = [...state.busket];
			const index = state.busket.findIndex(
				(busketItem) => busketItem.id === action.item.id
			);
			if (index >= 0) newBusket.splice(index, 1);

			return {
				...state,
				busket: newBusket
			};
			break;
		default:
			return state;
	}
}

export default reducer;
