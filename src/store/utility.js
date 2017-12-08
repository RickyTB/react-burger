/**
 * Created by Ricardo Baquero on 8/12/17.
 * Copyright BuenPlan, 2017.
 */
export const updateObject = (oldObject, updatedProperties) => {
    return {...oldObject, ...updatedProperties};
};