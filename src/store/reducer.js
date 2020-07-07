export const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_COUNTRY':
            return action.payload
        default:
            return state;
    }

}