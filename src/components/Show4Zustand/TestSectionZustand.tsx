import React from 'react';
import { ShapeProps } from '../../utils/numbers';
import TestView, { viewBoxSize } from '../TestView';
import create from 'zustand';
import shallow from 'zustand/shallow';

function DeepTreeSimulation(props: ShapeProps) {
    return (
        <TestView {...props} />
    );
}

function TestSectionView() {
    const { nPoints, setNPoints, oRadius, setORadius, iRadius, setIRadius, } = useStore(store => ({
        nPoints: store.nPoints,
        oRadius: store.oRadius,
        iRadius: store.iRadius,
        setNPoints: store.setNPoints,
        setORadius: store.setORadius,
        setIRadius: store.setIRadius
    }), shallow);
    // const [nPoints, setNPoints] = useAtom(nPointsAtom);
    // const [oRadius, setORadius] = useAtom(oRadiusAtom);
    // const [iRadius, setIRadius] = useAtom(iRadiusAtom);

    return (
        <div className="px-4 py-2 flex space-x-4">
            {/* View */}
            <div className="w-32 h-32 text-blue-500 border-4 rounded-md border-blue-100 bg-gray-50">
                <DeepTreeSimulation oRadius={oRadius} iRadius={iRadius} nPoints={nPoints} />
            </div>
            {/* Controls */}
            <div className="text-blue-900">
                <div className="flex items-center">
                    <div className="flex-1">Outer points</div>
                    <input className="mx-4" type="range" min={0} max={50} value={nPoints} onChange={(event) => setNPoints(+event.target.value)} />
                    <div className="w-16">{nPoints}</div>
                </div>
                <div className="flex items-center">
                    <div className="flex-1">Inner radius</div>
                    <input className="mx-4" type="range" min={1} max={viewBoxSize / 2} value={iRadius} onChange={(event) => setIRadius(+event.target.value)} />
                    <div className="w-16">{iRadius}</div>
                </div>
                <div className="flex items-center">
                    <div className="flex-1">Outer radius</div>
                    <input className="mx-4" type="range" min={1} max={viewBoxSize / 2} value={oRadius} onChange={(event) => setORadius(+event.target.value)} />
                    <div className="w-16">{oRadius}</div>
                </div>
            </div>
        </div>
    );
}

function TestSection() {
    return (
        <TestSectionView />
    );
}

export default TestSection;

type Store = {
    nPoints: number;
    oRadius: number;
    iRadius: number;
    setNPoints: (v: number) => any;
    setORadius: (v: number) => any;
    setIRadius: (v: number) => any;
};

const useStore = create<Store>((set) => ({
    nPoints: 20,
    oRadius: 150,
    iRadius: 30,
    setNPoints: (v: number) => set({ nPoints: v }),
    setORadius: (v: number) => set({ oRadius: v }),
    setIRadius: (v: number) => set({ iRadius: v }),
}));