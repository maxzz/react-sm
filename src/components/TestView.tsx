import React from 'react';
import { getNGonPath } from '../utils/numbers';

type TestSectionProps = {
    nPoints: number; // Outer points
    oRadius: number; // Outer radius
    iRadius: number; // Inner radius
};

const viewBoxSize = 300;

function TestView(props: TestSectionProps) {
    const { oRadius, iRadius, nPoints } = props;

    const path = React.useMemo(() => getNGonPath({nPoints, oRadius, iRadius}, viewBoxSize), [nPoints, oRadius, iRadius, viewBoxSize]);

    return (
        <svg className="w-full h-full" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
            <path stroke="currentColor" strokeWidth="2" fill="none" d={path} />
        </svg>
    );
}

function DeepTreeSimulation(props: TestSectionProps) {
    return (
        <TestView {...props} />
    );
}

function TestSection() {
    const [oRadius, setORadius] = React.useState(100);
    const [iRadius, setIRadius] = React.useState(40);
    const [nPoints, setNPoints] = React.useState(5);

    return (
        <div className="px-4 py-2 flex space-x-4">
            {/* View */}
            <div className="w-32 h-32 text-blue-500 border-4 rounded-md border-yellow-600-100">
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

export default TestSection;
