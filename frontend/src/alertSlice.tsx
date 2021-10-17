import { AlertColor } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

type Alert = {
  type: AlertColor | undefined;
  message: string | undefined;
};

const initialState = {
  type: 'success',
  message: ''
} as Alert;

/**
 * Slice responsible for all the alert information in the redux store
 *
 */
export const alertSlice = createSlice({
  name: "configuration",
  initialState: initialState,
  reducers: {
    updateAlert: (state:any, value:any) => {
      state.type = value.payload.type;
      state.message = value.payload.message;
    },
  },
});

// export actions defined in the slice.
// to be used with useAppDispatch
export const { updateAlert } = alertSlice.actions;

// export slice reducer to be used in the main store configuration
export default alertSlice.reducer;