import {UserType} from "../HW8";


type SortType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type CheckType = {
    type: 'check'
    payload: number
}
type UnionType = SortType | CheckType
export const homeWorkReducer = (state: UserType[], action: UnionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            let sortedArr = [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
            return action.payload === 'up' ? sortedArr : sortedArr.reverse()
        }
        case'check': {
            return state.filter(u => u.age > action.payload)
        }
        default:
            return state
    }
}
