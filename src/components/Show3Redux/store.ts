import { configureStore } from '@reduxjs/toolkit';
import shapePropsReducer from './shape-props-slice';

export const store = configureStore({
    reducer: {
        shapeProps: shapePropsReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
