import React from 'react';
import { ShapeProps } from '../../utils/numbers';
import TestView, { viewBoxSize } from '../TestView';

function TestContextView() {
    const { nPoints, setNPoints, oRadius, setORadius, iRadius, setIRadius, } = React.useContext(ShapeContext);
    return (
        <div className="px-4 py-2 flex space-x-4">
            {/* View */}
            <div className="w-32 h-32 text-blue-500 border-4 rounded-md border-blue-100 bg-gray-50">
                <TestView oRadius={oRadius} iRadius={iRadius} nPoints={nPoints} />
            </div>
            {/* Controls */}
            <div className="text-blue-900">
                <div className="flex items-center">
                    <div className="flex-1">Outer points</div>
                    <input className="mx-4" type="range" min={0} max={50} value={nPoints} onChange={(event) => setNPoints(+event.target.value)} />
                    <div className="w-16">{nPoints}</div>
                </div>
                <div className="flex items-center">
                    <div className="flex-1">Innser radius</div>
                    <input className="mx-4" type="range" min={1} max={viewBoxSize / 2} value={iRadius} onChange={(event) => setIRadius(+event.target.value)} />
                    <div className="w-16">{iRadius}</div>
                </div>
                <div className="flex items-center">
                    <div className="flex-1">Outer radius</div>
                    <input className="mx-4" type="range" min={1} max={viewBoxSize / 2} value={oRadius} onChange={(event) => setORadius(+event.target.value)} />
                    <div className="w-16">{oRadius}</div>
                </div>
            </div>
        </div>
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
