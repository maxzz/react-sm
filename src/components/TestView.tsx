import React from 'react';

function generatePoints(numberOfPoints: number, outerRadius: number, innerRadius: number, viewBoxSize: number) {
    const points = [];
    const xPosition = viewBoxSize / 2;
    const yPosition = viewBoxSize / 2;
    const angleStep = (Math.PI * 2) / numberOfPoints;

    for (let i = 1; i <= numberOfPoints; i++) {
        const radiusAtPoint = i % 2 === 0 ? outerRadius : innerRadius;
        const x = xPosition + Math.cos(i * angleStep) * radiusAtPoint;
        const y = yPosition + Math.sin(i * angleStep) * radiusAtPoint;
        points.push({ x, y });
    }

    return points;
}

type TestSectionProps = {
    oRadius: number; // Outer radius
    iRadius: number; // Inner radius
    oPoints: number; // Outer points
};

function TestView(props: TestSectionProps) {
    const { oRadius, iRadius, oPoints } = props;
    const viewBoxSize = 240;

    const path = React.useMemo(() => {
        const points = generatePoints(oPoints * 2, oRadius, iRadius, viewBoxSize);
        const s = points.map(({ x, y }) => `L${x},${y}`).join(' ');
        return `M${points[0].x},${points[0].y} ${s}z`;
    }, [oPoints, oRadius, iRadius, viewBoxSize]);

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
            <div className="w-32 h-32 text-blue-500 border-4 rounded-md border-yellow-600-100">
                <DeepTreeSimulation oRadius={oRadius} iRadius={iRadius} oPoints={nPoints} />
            </div>
            <div className="text-blue-900">
                <div className="flex items-center">
                    <div className="flex-1">Sides</div>
                    <input className="mx-4" type="range" value={nPoints} onChange={(event) => setNPoints(+event.target.value)} />
                </div>
                <div className="flex items-center">
                    <div className="flex-1">Innser radius</div>
                    <input className="mx-4" type="range" value={iRadius} onChange={(event) => setIRadius(+event.target.value)} />
                </div>
                <div className="flex items-center">
                    <div className="flex-1">Outer radius</div>
                    <input className="mx-4" type="range" value={oRadius} onChange={(event) => setORadius(+event.target.value)} />
                </div>
            </div>
        </div>
    );
}

export default TestSection;
