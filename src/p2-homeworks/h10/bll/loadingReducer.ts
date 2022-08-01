type ActionType = ReturnType<typeof loadingAC>

type LoadingType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state: LoadingType = initState, action: ActionType): LoadingType => {
    switch (action.type) {
        case 'IS-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: 'IS-LOADING', isLoading} as const)