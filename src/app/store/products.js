import { createAction, createSlice } from "@reduxjs/toolkit";
import productService from "../services/product.service";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import getRandomInt from "../utils/getRandomInt";
import history from "../utils/history";
import { generateAuthError } from "../utils/generateAuthError";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    // initialState,
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true;
        },
        productsReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        productsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        productCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        productLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        },
        productUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex(
                    (index) => index._id === action.payload._id
                )
            ] = action.payload;
        }
    }
});

const { reducer: productsReducer, actions } = productsSlice;
const {
    productsRequested,
    productsReceived,
    productsRequestFailed,
    authRequestSuccess,
    authRequestFailed,
    productCreated,
    productLoggedOut,
    productUpdateSuccessed
} = actions;

const authRequested = createAction("products/authRequested");
const productCreateRequested = createAction("products/productCreateRequested");
const createProductFailed = createAction("products/createproductFailed");
const productUpdateRequested = createAction("products/productUpdateRequested");
const productUpdateFailed = createAction("products/productUpdateFailed");

export const login =
    ({ payload, redirect }) =>
    async (dispatch) => {
        const { email, password } = payload;
        dispatch(authRequested());
        try {
            const data = await authService.login({ email, password });
            dispatch(authRequestSuccess({ productId: data.localId }));
            localStorageService.setTokens(data);
            history.push(redirect);
        } catch (error) {
            const { code, message } = error.response.data.error;
            if (code === 400) {
                const errorMessage = generateAuthError(message);
                dispatch(authRequestFailed(errorMessage));
            } else {
                dispatch(authRequestFailed(error.message));
            }
        }
    };

export const signUp =
    ({ email, password, ...rest }) =>
    async (dispatch) => {
        dispatch(authRequested());
        try {
            const data = await authService.register({ email, password });
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess({ productId: data.localId }));
            dispatch(
                createProduct({
                    _id: data.localId,
                    email,
                    rate: getRandomInt(1, 5),
                    completedMeetings: getRandomInt(0, 200),
                    image: `https://avatars.dicebear.com/api/avataaars/${(
                        Math.random() + 1
                    )
                        .toString(36)
                        .substring(7)}.svg`,
                    ...rest
                })
            );
        } catch (error) {
            dispatch(authRequestFailed(error.message));
        }
    };
export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(productLoggedOut());
    history.push("/");
};
function createProduct(payload) {
    return async function (dispatch) {
        dispatch(productCreateRequested());
        try {
            const { content } = await productService.create(payload);
            dispatch(productCreated(content));
            history.push("/products");
        } catch (error) {
            dispatch(createProductFailed(error.message));
        }
    };
}
export const updateProducts = (payload) => async (dispatch) => {
    dispatch(productUpdateRequested());
    try {
        const { content } = await productService.update(payload);
        dispatch(productUpdateSuccessed(content));
        history.push(`/products/${content._id}`);
    } catch (error) {
        dispatch(productUpdateFailed(error.message));
    }
};

export const loadProductsList = () => async (dispatch, getState) => {
    dispatch(productsRequested());
    try {
        const { content } = await productService.get();
        dispatch(productsReceived(content));
    } catch (error) {
        dispatch(productsRequestFailed(error.message));
    }
};

export const getProductsList = () => (state) => {
    console.log("getProductsList", state);

    return state.products.entities;
};
export const getCurrentProductData = () => (state) => {
    return state.products.entities
        ? state.products.entities.find(
              (u) => u._id === state.products.auth.productId
          )
        : null;
};
export const getProductById = (productId) => (state) => {
    if (state.products.entities) {
        return state.products.entities.find((u) => u._id === productId);
    }
};

export const getIsLoggedIn = () => (state) => state.products.isLoggedIn;
export const getDataStatus = () => (state) => state.products.dataLoaded;
export const getproductsLoadingStatus = () => (state) =>
    state.products.isLoading;
export const getCurrentProductId = () => (state) => {
    console.log("getCurrentProductId", state);
    return state.products.auth.productId;
};
export const getAuthErrors = () => (state) => state.products.error;
export default productsReducer;
