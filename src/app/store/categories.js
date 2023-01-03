import { createSlice } from "@reduxjs/toolkit";
import categorieService from "../services/category.service";
import { isOutdated } from "../utils/isOutdated";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        categoriesRequested: (state) => {
            state.isLoading = true;
        },
        categoriesReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        categoriesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: categoriesReducer, actions } = categoriesSlice;
const { categoriesRequested, categoriesReceived, categoriesRequestFailed } =
    actions;

export const loadCategoriesList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().categories;

    if (isOutdated(lastFetch)) {
        dispatch(categoriesRequested());
        try {
            const { content } = await categorieService.get();
            dispatch(categoriesReceived(content));
        } catch (error) {
            dispatch(categoriesRequestFailed(error.message));
        }
    }
};

export const getCategory = () => (state) => {
    // console.log("categories", state);

    return state.categories.entities;
};
export const getCategoryLoadingStatus = () => (state) =>
    state.categories.isLoading;
export const getCategoryById = (id) => (state) => {
    if (state.categories.entities) {
        return state.categories.entities.find((p) => p._id === id);
    }
};

export default categoriesReducer;
