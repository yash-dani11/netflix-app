import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchSlice from "./searchSlice";
import headerSlice from "./headerSlice";
import modalSlice from "./modalSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    search: searchSlice,
    header: headerSlice,
    modal:modalSlice,
  },
});
export default store;
