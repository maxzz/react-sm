import { createStore } from 'redux';

export enum ACTIONS {
    nPoints = 'nPoints',
    oRadius = 'oRadius',
    iRadius = 'iRadius',
}

const initialState = {
    nPoints: 4,
    oRadius: 10,
    iRadius: 150,
};

const reducer = (state = initialState, action: { type: ACTIONS; value: number; }) => {
    switch (action.type) {
        case ACTIONS.nPoints:
            return { ...state, nPoints: action.value };
        case ACTIONS.oRadius:
            return { ...state, oRadius: action.value };
        case ACTIONS.iRadius:
            return { ...state, iRadius: action.value };
        default:
            return state;
    }
};

export const store = createStore(reducer);
