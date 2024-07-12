// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../../store";

// type AuthenticationState = {
//   user: UserType | null;
// };

// const initialAuthenticationState: AuthenticationState = {
//   user: null,
// };

// const authenticationSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthenticationState,
//   reducers: {
//     setUser: (state, action: PayloadAction<UserType | null>) => {
//       state.user = action.payload;
//     },
//   },
// });

// export const { setUser } = authenticationSlice.actions;

// export default authenticationSlice.reducer;