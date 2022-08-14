type ThemeReducerType = {
    theme: string
}

type ActionType = ReturnType<typeof changeThemeAC>

const initState: ThemeReducerType = {
    theme: 'white'
}

export const themeReducer = (state = initState, action: ActionType): ThemeReducerType => {
    switch (action.type) {
        case "NEW-THEME": {
            return {
                ...state,
                theme: action.newTheme
            }
        }
        default:
            return state;
    }
};

export const changeThemeAC = (newTheme: string) => ({type: 'NEW-THEME', newTheme} as const);