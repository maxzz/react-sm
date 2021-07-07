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

function TestView() {
    const viewBoxSize = 240;
    const outerRadius = 100;
    const innerRadius = 40;
    const outerPoints = 5;

    const path = React.useMemo(() => {
        const points = generatePoints(outerPoints * 2, outerRadius, innerRadius, viewBoxSize);
        const s = points.map(({ x, y }) => `L${x},${y}`).join(' ');
        return `M${points[0].x},${points[0].y} ${s}z`;
    }, [outerPoints, outerRadius, innerRadius, viewBoxSize]);

    return (
        <div>
            <svg className="w-24 h-24 bg-red-100" viewBox="0 0 240 240">
                <path stroke="black" strokeWidth="2" fill="none" d={path} />
            </svg>
        </div>
    );
}

export default TestView;
