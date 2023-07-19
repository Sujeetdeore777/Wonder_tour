export const ADD_CATEGORY = "ADD_CATEGORY";
export const addCategoriesAction = (categories) => {
    return {
        type: "ADD_CATEGORY",
        payload: categories
    }
}
export const FETCH_CATEGORY = "FETCH_CATEGORY";
export const fetchCategoriesAction = (categories) => {
    return {
        type: FETCH_CATEGORY,
        payload: categories
    }
}