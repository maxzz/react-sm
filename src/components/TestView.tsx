import React from 'react';
import { getNGonPath, ShapeProps } from '../utils/numbers';

export const viewBoxSize = 300;

function TestView(props: ShapeProps) {
    const { nPoints, oRadius, iRadius } = props;
    const path = React.useMemo(() => getNGonPath(props, viewBoxSize), [nPoints, oRadius, iRadius]);
    return (
        <svg className="w-full h-full" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
            <path stroke="currentColor" strokeWidth="2" fill="none" d={path} />
            <circle stroke="#00ff0080" strokeWidth="1" fill="none" r={oRadius} cx={viewBoxSize / 2} cy={viewBoxSize / 2} />
            <circle stroke="#00ff0080" strokeWidth="1" fill="none" r={iRadius} cx={viewBoxSize / 2} cy={viewBoxSize / 2} />
        </svg>
    );
}

export default TestView;
