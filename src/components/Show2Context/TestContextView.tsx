import React from 'react';
import { getNGonPath, ShapeProps } from '../../utils/numbers';

const viewBoxSize = 300;

function TestView(props: ShapeProps) {
    const { nPoints, oRadius, iRadius } = props;
    const path = React.useMemo(() => getNGonPath(props, viewBoxSize), [nPoints, oRadius, iRadius]);
    return (
        <svg className="w-full h-full" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
            <path stroke="currentColor" strokeWidth="2" fill="none" d={path} />
        </svg>
    );
}

function DeepTreeSimulation(props: ShapeProps) {
    return (
        <TestView {...props} />
    );
}

function TestContextView() {
    const {nPoints, setNPoints, oRadius, setORadius, iRadius, setIRadius,} = React.useContext(ShapeContext);


    // const [nPoints, setNPoints] = React.useState(5);
    // const [oRadius, setORadius] = React.useState(100);
    // const [iRadius, setIRadius] = React.useState(40);

    return (
        <div className="px-4 py-2 flex space-x-4">
            {/* View */}
            <div className="w-32 h-32 text-blue-500 border-4 rounded-md border-blue-100 bg-gray-50">
                <DeepTreeSimulation oRadius={oRadius} iRadius={iRadius} nPoints={nPoints} />
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

function defShape() {
    return {
        nPoints: 5,
        oRadius: 100,
        iRadius: 40,
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
    const [nPoints, setNPoints] = React.useState(5);
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
            <TestContextView />
        </ShapeContext.Provider>
    )
}

export default TestSection;
