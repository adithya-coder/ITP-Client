import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

interface INavBarState {
  foldedOpen: boolean;
  mobileOpen:boolean;
}

const initialState: INavBarState = {
  foldedOpen: false,
	mobileOpen: false
};

export const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    setFoldedOpen: state => {
      state.foldedOpen = true;
    },
    setFoldedClose: state => {
      state.foldedOpen = false ;
    },
    setMobileOpen: state => {
      state.mobileOpen = true;
    },
    setMobileClose: state => {
      state.mobileOpen = false ;
    },
  },
});

export const { setFoldedOpen, setFoldedClose, setMobileOpen, setMobileClose } = navBarSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const foldedOpen = (state: RootState) => state.navBar.foldedOpen;

export default navBarSlice.reducer;
