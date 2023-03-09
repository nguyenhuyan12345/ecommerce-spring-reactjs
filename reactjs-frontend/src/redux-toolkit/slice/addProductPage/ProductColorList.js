import { createSlice, current } from '@reduxjs/toolkit';

export const productColorListSlice = createSlice({
    name: 'poductColorList',
    initialState: [],
    reducers: {
        addColor: (state) => {
            let newState = state;
            if (newState.length === 0) {
                let item = 0;
                item += 1;
                const newColor = {
                    id: item,
                    file: '',
                    colorName: ''
                };
                newState = [...newState, newColor];
                return newState;
            } else {
                let item = newState[newState.length - 1].id;
                item += 1;
                const newColor = {
                    id: item,
                    file: '',
                    colorName: ''
                };
                newState = [...newState, newColor];
                return newState;
            }
        },
        removeColor: (state, action) => {
            let newState = state;
            newState = newState.filter((item) => {
                return item.id == action.payload ? false : true;
            });
            return newState;
        },
        setNewColor: (state, action) => {
            const newSate = state;
            newSate.color = [
                ...state.color,
                { id: action.payload.id, file: action.payload.file, colorName: action.payload.colorName }
            ];
            return newSate;
        }
    }
});

export const { addColor, removeColor } = productColorListSlice.actions;

export default productColorListSlice.reducer;
