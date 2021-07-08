import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShapeProps } from '../../utils/numbers';

const initialState: ShapeProps = {
    nPoints: 12,
    oRadius: 140,
    iRadius: 12,
};

const shapePropsSlice = createSlice({
    name: 'shapeProps',
    initialState,
    reducers: {
        setNPoints(state, action: PayloadAction<number>) {
            state.nPoints = action.payload;
        },
        setORadius(state, action: PayloadAction<number>) {
            state.oRadius = action.payload;
        },
        setIRadius(state, action: PayloadAction<number>) {
            state.iRadius = action.payload;
        }
    }
});

export const { setNPoints, setORadius, setIRadius } = shapePropsSlice.actions;
export default shapePropsSlice.reducer;
