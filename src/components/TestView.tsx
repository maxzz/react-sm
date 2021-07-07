import React from 'react';

function generatePoints(numberOfPoints: number, outerRadius: number, innerRadius: number, viewBoxSize: number) {
    const xPosition = viewBoxSize / 2;
    const yPosition = viewBoxSize / 2;
    const angleStep = (Math.PI * 2) / numberOfPoints;
    const points = [];

    for (let i = 1; i <= numberOfPoints; i++) {
        const radiusAtPoint = i % 2 === 0 ? outerRadius : innerRadius;
        const x = xPosition + Math.cos(i * angleStep) * radiusAtPoint;
        const y = yPosition + Math.sin(i * angleStep) * radiusAtPoint;
        points.push({ x, y });
    }

    return points;
}

type TestViewProps = {
    outerRadius?: number;
    innerRadius?: number;
    outerPoints?: number;
};

function TestView(props: TestViewProps) {
    const {
        outerRadius = 100,
        innerRadius = 40,
        outerPoints = 5
    } = props;
    const viewBoxSize = 240;

    const path = React.useMemo(() => {
        const points = generatePoints(outerPoints * 2, outerRadius, innerRadius, viewBoxSize);
        const s = points.map(({ x, y }) => `L${x},${y}`).join(' ');
        return `M${points[0].x},${points[0].y} ${s}z`;
    }, [outerPoints, outerRadius, innerRadius, viewBoxSize]);

    return (
        <svg className="w-full h-full" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
            <path stroke="currentColor" strokeWidth="2" fill="none" d={path} />
        </svg>
    );
}

function TestSection() {
    return (
        <div className="px-4 py-2 flex space-x-4">
            <div className="w-32 h-32 text-blue-500 border-4 rounded-md border-yellow-600-100">
                <TestView />
            </div>
            <div className="text-blue-900">
                <div className="flex items-center">
                    <div className="flex-1">Sides</div>
                    <input className="mx-4" type="range" />
                </div>
                <div className="flex items-center">
                    <div className="flex-1">Innser radius</div>
                    <input className="mx-4" type="range" />
                </div>
                <div className="flex items-center">
                    <div className="flex-1">Outer radius</div>
                    <input className="mx-4" type="range" />
                </div>
            </div>
        </div>
    );
}

export default TestSection;
