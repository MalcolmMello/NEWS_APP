import { configureStore } from "@reduxjs/toolkit";

import { newsApi } from "../api/NewsApi";

export default configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer
    }
})