const initialState = {
    name: "Vijay",
    age: 27
}

const DetailsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "UPDATE_NAME":
            return { ...state, ...{ name: payload.name } };
        case "UPDATE_AGE":
            return { ...state, ...{ age: payload.age } };
        default:
            return { ...state };
    }
}

export default DetailsReducer;