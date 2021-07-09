import React from 'react';
import { ShapeProps } from '../../utils/numbers';
import TestView from '../TestView';

import { Provider } from 'react-redux';
import { store } from './store';
import { useAppDispath, useAppSelector } from './hooks';
import { setIRadius as _setIRadius, setNPoints as _setNPoints, setORadius as _setORadius } from './shape-props-slice';
import TestControls from '../TestControls';


function DeepTreeSimulation(props: ShapeProps) {
    return (
        <TestView {...props} />
    );
}

function TestContextView() {
    const nPoints = useAppSelector((store) => store.shapeProps.nPoints);
    const oRadius = useAppSelector((store) => store.shapeProps.oRadius);
    const iRadius = useAppSelector((store) => store.shapeProps.iRadius);

    const dispatch = useAppDispath();

    const setNPoints = (value: number) => dispatch(_setNPoints(value));
    const setORadius = (value: number) => dispatch(_setORadius(value));
    const setIRadius = (value: number) => dispatch(_setIRadius(value));

    let props = { nPoints, setNPoints, oRadius, setORadius, iRadius, setIRadius, };

    return (
        <TestControls {...props}
            href="https://github.com/maxzz/react-sm/blob/master/src/components/Show3Redux/TestSectionRedux.tsx"
            body={
                <DeepTreeSimulation oRadius={oRadius} iRadius={iRadius} nPoints={nPoints} />
            }
        />
    );
}

function DeepTreeSimulation2() {
    return (
        <TestContextView />
    );
}

function TestSection() {

    return (
        <Provider store={store}>
            <DeepTreeSimulation2 />
        </Provider>
    );
}

export default TestSection;
