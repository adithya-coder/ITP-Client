import { createSlice } from '@reduxjs/toolkit';
//import navigationConfig from '../../configs/navigationConfig';


const initialState = {
	routes: null,
	authRoutes: [],
	filteredRoutes:[]
}

const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setAuthNavigation: (state, action) => {
			state.authRoutes = action.payload;
		},
		setFilteredNavigation: (state, action) => {
			state.filteredRoutes = action.payload;
		},
		resetNavigation: () => initialState
	}
});

export const { resetNavigation, setFilteredNavigation, setAuthNavigation } = navigationSlice.actions;


export default navigationSlice.reducer;
