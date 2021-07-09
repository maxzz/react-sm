import React from 'react';
import { ShapeProps } from '../../utils/numbers';
import TestView from '../TestView';
import { atom, useAtom } from 'jotai';
import TestControls from '../TestControls';

function DeepTreeSimulation(props: ShapeProps) {
    return (
        <TestView {...props} />
    );
}

function TestSectionView() {
    const [nPoints, setNPoints] = useAtom(nPointsAtom);
    const [oRadius, setORadius] = useAtom(oRadiusAtom);
    const [iRadius, setIRadius] = useAtom(iRadiusAtom);

    let props = { nPoints, setNPoints, oRadius, setORadius, iRadius, setIRadius, };

    return (
        <TestControls {...props}
            href="https://github.com/maxzz/react-sm/blob/master/src/components/Show5Jotai/TestSectionJotai.tsx"
            body={
                <DeepTreeSimulation oRadius={oRadius} iRadius={iRadius} nPoints={nPoints} />
            }
        />
    );
}

function TestSection() {
    return (
        <TestSectionView />
    );
}

export default TestSection;

const nPointsAtom = atom(20);
const oRadiusAtom = atom(150);
const iRadiusAtom = atom(30);
