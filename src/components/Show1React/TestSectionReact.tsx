import React from 'react';
import { ShapeProps } from '../../utils/numbers';
import TestView from '../TestView';
import TestControls from '../TestControls';

function DeepTreeSimulation0(props: ShapeProps) {
    return <TestView {...props} />;
}

function DeepTreeSimulation(props: ShapeProps) {
    return (
        <DeepTreeSimulation0 {...props} />
    );
}

function TestSection() {
    const [nPoints, setNPoints] = React.useState(3); //12,150,74 //14,150,10
    const [oRadius, setORadius] = React.useState(100);
    const [iRadius, setIRadius] = React.useState(40);

    let props = { nPoints, setNPoints, oRadius, setORadius, iRadius, setIRadius, };

    return (
        <TestControls {...props}
            href="https://github.com/maxzz/react-sm/blob/master/src/components/Show1React/TestSectionReact.tsx"
            body={
                <DeepTreeSimulation oRadius={oRadius} iRadius={iRadius} nPoints={nPoints} />
            }
        />
    );
}

export default TestSection;
