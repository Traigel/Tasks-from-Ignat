import {filterAC, homeWorkReducer, sortAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[]
beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortAC('up'))
    expect(newState[0].name).toBe('Александр')
    expect(newState[5].name).toBe('Кот')
    expect(newState.length).toBe(6)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortAC('down'))
    expect(newState[5].name).toBe('Александр')
    expect(newState[0].name).toBe('Кот')
    expect(newState.length).toBe(6)
})
test('check age 18', () => {
    const newState1 = homeWorkReducer(initialState, filterAC(18))
    const newState2 = homeWorkReducer(initialState, filterAC(44))
    expect(newState1.length).toBe(4)
    expect(newState2.length).toBe(3)
})
