export type ShapeProps = {
    nPoints: number; // Outer points
    oRadius: number; // Outer radius
    iRadius: number; // Inner radius
};

function generatePoints(numberOfPoints: number, outerRadius: number, innerRadius: number, viewBoxSize: number) {
    if (!numberOfPoints) {
        return [];
    }

    const xPosition = viewBoxSize / 2;
    const yPosition = viewBoxSize / 2;
    const angleStep = (Math.PI * 2) / numberOfPoints;
    const points = [];

    const initialAngle = -Math.PI / 2; //-90 * Math.PI / 180

    for (let i = 0; i < numberOfPoints; i++) {
        const radiusAtPoint = i % 2 === 0 ? outerRadius : innerRadius;
        const x = xPosition + Math.cos(i * angleStep + initialAngle) * radiusAtPoint;
        const y = yPosition + Math.sin(i * angleStep + initialAngle) * radiusAtPoint;
        points.push({ x, y });
    }

    return points;
}

export function getNGonPath({ nPoints, oRadius, iRadius }: ShapeProps, viewBoxSize: number): string {
    const points = generatePoints(nPoints * 2, oRadius, iRadius, viewBoxSize);
    if (!points.length) {
        return '';
    }
    const s = points.map(({ x, y }) => `L${x},${y}`).join(' ');
    return `M${points[0].x},${points[0].y} ${s}z`;
}
