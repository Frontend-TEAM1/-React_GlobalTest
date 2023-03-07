
export const pizzaReducer = (state, action) => {

    switch(action.type) {
        case "ADD":
            return [...state, action.payload]
        case "DELETE":
            console.log(state)
            const newList = state.filter((item) => (item.id !== action.payload.id));
            return newList;
        default: 
            return state;
    }
}

