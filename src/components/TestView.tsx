import React from 'react';

function generatePath(radius: number, numberOfPoints: number, size: number) {
    const angleStep = (Math.PI * 2) / numberOfPoints;
    const xPosition = 120; //shape.clientWidth / 2
    const yPosition = 120; //shape.clientHeight / 2

    const points = [];

    for (let i = 1; i <= numberOfPoints; i++) {
        const radiusAtPoint = i % 2 === 0 ? radius : size;
        const x = xPosition + Math.cos(i * angleStep) * radiusAtPoint;
        const y = yPosition + Math.sin(i * angleStep) * radiusAtPoint;

        points.push({ x, y });
    }

    return points;
}

function TestView() {
    const viewBoxSize = 240;
    const size = 40;
    const sides = 5;
    const points = generatePath(100, sides * 2, size);

    const path = points.map(({ x, y }) => `L${x},${y}`).join(' ');

    return (
        <div>
            <svg className="w-24 h-24 bg-red-100" viewBox="0 0 240 240">
                <path
                    stroke="black" strokeWidth="2" fill="none"
                    d={`M${points[0].x},${points[0].y} ${path}z`}
                />
            </svg>
        </div>
    );
}

export default TestView;
