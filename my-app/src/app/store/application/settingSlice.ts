import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

interface ISettingState {
  selectedLayout: string;
  selectedTheme: string;
  mobileOpen:boolean;
}

const initialState: ISettingState = {
    selectedTheme: 'Classic',
    mobileOpen: false,
    selectedLayout : 'default'
};

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, theme) => { 
      state.selectedTheme = String(theme.payload);
    },
    setMobileOpen: state => {
      state.mobileOpen = true;
    },
    setMobileClose: state => {
      state.mobileOpen = false ;
    },
  },
});

export const {setTheme, setMobileOpen, setMobileClose } = settingSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
//export const selectedTheme = (state: RootState) => state.setting.selectedTheme;

export default settingSlice.reducer;
