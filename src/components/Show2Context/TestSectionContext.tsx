import React from 'react';
import { ShapeProps } from '../../utils/numbers';
import TestControls from '../TestControls';
import TestView from '../TestView';

function TestContextView() {
    const { nPoints, setNPoints, oRadius, setORadius, iRadius, setIRadius, } = React.useContext(ShapeContext);
    let props = { nPoints, setNPoints, oRadius, setORadius, iRadius, setIRadius, };
    return (
        <TestControls {...props} body={<TestView oRadius={oRadius} iRadius={iRadius} nPoints={nPoints} />} />
    );
}

function DeepTree0() {
    return (
        <TestContextView />
    );
}

function DeepTree1() {
    return (
        <DeepTree0 />
    );
}

function DeepTreeSimulation() {
    return (
        <DeepTree1 />
    );
}

function defShape() {
    return {
        nPoints: 4,
        oRadius: 10,
        iRadius: 150,
    };
}

type ShapeContextType = ShapeProps & {
    setNPoints: (value: number) => void;
    setORadius: (value: number) => void;
    setIRadius: (value: number) => void;
};

const ShapeContext = React.createContext<ShapeContextType>({
    ...defShape(),
    setNPoints: (value: number) => { },
    setORadius: (value: number) => { },
    setIRadius: (value: number) => { },
});
ShapeContext.displayName = 'NameIsShapeContext';

function TestSection() {
    const initialState: ShapeContextType = {
        ...defShape(),
        setNPoints: (v: number) => dispatch({type: 'nPoints', value: v}),
        setORadius: (v: number) => dispatch({type: 'oRadius', value: v}),
        setIRadius: (v: number) => dispatch({type: 'iRadius', value: v}),
    };

    function reducer(state: ShapeContextType, action: { type: string; value: number; }) {
        switch (action.type) {
            case 'nPoints':
                return { ...state, nPoints: action.value };
            case 'oRadius':
                return { ...state, oRadius: action.value };
            case 'iRadius':
                return { ...state, iRadius: action.value };
            default:
                throw new Error('oo');
        }
    }

    const [context, dispatch] = React.useReducer(reducer, initialState);

    return (
        <ShapeContext.Provider value={context}>
            <DeepTreeSimulation />
        </ShapeContext.Provider>
    );
}

// It works OK without useReducer.
/** /
function TestSection() {
    const [context, setContext] = React.useState({
        ...defShape(),
        setNPoints,
        setORadius,
        setIRadius,
    });

    function setNPoints(v: number) {
        setContext((prev) => ({ ...prev, nPoints: v, }))
    }

    function setORadius(v: number) {
        setContext((prev) => ({ ...prev, oRadius: v, }))
    }

    function setIRadius(v: number) {
        setContext((prev) => ({ ...prev, iRadius: v, }))
    }

    return (
        <ShapeContext.Provider value={context}>
            <DeepTreeSimulation />
        </ShapeContext.Provider>
    )
}
/**/

export default TestSection;
