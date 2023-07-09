export const ADD_JWT = "ADD_JWT";
export const REMOVE_JWT = "REMOVE_JWT";

export const addJwt = jwt => ({ type: "ADD_JWT", payload: jwt });

export const removeJwt = jwt => ({ type: "REMOVE_JWT", payload: jwt });

