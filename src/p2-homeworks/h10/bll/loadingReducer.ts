type LoadingAT = ReturnType<typeof loadingAC>
type LoadingReducerType = {
    isLoading:boolean
}
const initState = {
isLoading:false
}

export const loadingReducer = (state = initState, action: LoadingAT): LoadingReducerType => {
    switch (action.type) {
        case 'SET-LOADING-VALUE': {
            return {...state,isLoading : action.value}
        }
        default: return state
    }
}

export const loadingAC = (value:boolean) => ({type:"SET-LOADING-VALUE",value} as const) // fix any
