interface Action {
    type: string;
    payload: {
        isAuthenticated: boolean;
        user: string
    };
}

interface State {
    isAuthenticated: boolean;
    user: string
}

export const authReducer = (state: State, action: Action) => {
    const {
        type,
        payload: {
            isAuthenticated, user
        }
    } = action

    switch (type) {
        case 'SET_AUTH':
            return {
                ...state,
                isAuthenticated,
                user
            }

        default:
            return state
    }
}