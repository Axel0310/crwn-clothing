import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { createAction } from "../../helpers/reducer.helper";

export const setCategories = (categories) => {
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
}