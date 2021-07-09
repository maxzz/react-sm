import React from 'react';
import { ShapeProps } from '../../utils/numbers';
import TestView, { viewBoxSize } from '../TestView';

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
        <TestControls {...props} body={
            <DeepTreeSimulation oRadius={oRadius} iRadius={iRadius} nPoints={nPoints} />
        } />
        // <div className="px-4 py-2 flex space-x-4">
        //     {/* View */}
        //     <div className="w-32 h-32 text-blue-500 border-4 rounded-md border-blue-100 bg-gray-50">
        //         <DeepTreeSimulation oRadius={oRadius} iRadius={iRadius} nPoints={nPoints} />
        //     </div>
        //     {/* Controls */}
        //     <div className="text-blue-900">
        //         <div className="flex items-center">
        //             <div className="flex-1">Outer points</div>
        //             <input className="mx-4" type="range" min={0} max={50} value={nPoints} onChange={(event) => setNPoints(+event.target.value)} />
        //             <div className="w-16">{nPoints}</div>
        //         </div>
        //         <div className="flex items-center">
        //             <div className="flex-1">Inner radius</div>
        //             <input className="mx-4" type="range" min={1} max={viewBoxSize / 2} value={iRadius} onChange={(event) => setIRadius(+event.target.value)} />
        //             <div className="w-16">{iRadius}</div>
        //         </div>
        //         <div className="flex items-center">
        //             <div className="flex-1">Outer radius</div>
        //             <input className="mx-4" type="range" min={1} max={viewBoxSize / 2} value={oRadius} onChange={(event) => setORadius(+event.target.value)} />
        //             <div className="w-16">{oRadius}</div>
        //         </div>
        //     </div>
        // </div>
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
