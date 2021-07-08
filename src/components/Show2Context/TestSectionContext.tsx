import React from 'react';
import TestView, { viewBoxSize } from '../TestView';

function TestContextView() {
    const {nPoints, setNPoints, oRadius, setORadius, iRadius, setIRadius,} = React.useContext(ShapeContext);
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

const ShapeContext = React.createContext({
    ...defShape(),
    setNPoints: (value: number) => {},
    setORadius: (value: number) => {},
    setIRadius: (value: number) => {},
});
ShapeContext.displayName = 'NameIsShapeContext';

function TestSection() {
    const [nPoints, setNPoints] = React.useState(5); // TODO: We cam use useReducer hook
    const [oRadius, setORadius] = React.useState(100);
    const [iRadius, setIRadius] = React.useState(40);

    const [context, setContext] = React.useState({
        ...defShape(),
        setNPoints: setNPoints2,
        setORadius: setORadius2,
        setIRadius: setIRadius2,
    });

    function setNPoints2(v: number) {
        setNPoints(v);
        setContext((prev) => ({
            ...prev,
            nPoints: v,
        }))
    }

    function setORadius2(v: number) {
        setORadius(v);
        setContext((prev) => ({
            ...prev,
            oRadius: v,
        }))
    }

    function setIRadius2(v: number) {
        setIRadius(v);
        setContext((prev) => ({
            ...prev,
            iRadius: v,
        }))
    }

    return (
        <ShapeContext.Provider value={context}>
            <DeepTreeSimulation />
        </ShapeContext.Provider>
    )
}

export default TestSection;
