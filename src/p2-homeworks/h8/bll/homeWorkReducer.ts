import {UserType} from "../HW8";

type CortType = 'up' | 'down'
type SortUpACType = ReturnType<typeof sortAC>
type filterACType = ReturnType<typeof filterAC>
type ActionType = SortUpACType | filterACType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            switch (action.payload.sort) {
                case 'up': {
                    return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
                }
                case "down" : {
                    return [...state.sort((a, b) => b.name > a.name ? 1 : -1)]
                }
                default:
                    return state
            }
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload.age)
        }
        default:
            return state
    }
}

export const sortAC = (sort: CortType) => ({type: 'sort', payload: {sort}} as const)
export const filterAC = (age: number) => ({type: 'check', payload: {age}} as const)