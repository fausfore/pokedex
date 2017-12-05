export const loadState = (state: any, name: string) => {
    try {
        const serializedState = localStorage.getItem(name);
        if(serializedState === null){
            return state
        }
        return JSON.parse(serializedState)
    } catch (error){
        return state
    }
}

export const saveState = (state: any, name: string) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(name, serializedState)
    } catch (error) {
        // ignore
    }
}