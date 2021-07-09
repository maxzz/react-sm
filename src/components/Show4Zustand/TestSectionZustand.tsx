import React from 'react';
import { ShapeProps } from '../../utils/numbers';
import TestView from '../TestView';
import create from 'zustand';
import shallow from 'zustand/shallow';
import TestControls from '../TestControls';

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

    let props = { nPoints, setNPoints, oRadius, setORadius, iRadius, setIRadius, };

    return (
        <TestControls {...props}
            href="https://github.com/maxzz/react-sm/blob/master/src/components/Show4Zustand/TestSectionZustand.tsx"
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

type Store = {
    nPoints: number;
    oRadius: number;
    iRadius: number;
    setNPoints: (v: number) => void;
    setORadius: (v: number) => void;
    setIRadius: (v: number) => void;
};

const useStore = create<Store>((set) => ({
    nPoints: 30,
    oRadius: 40,
    iRadius: 12,
    setNPoints: (v: number) => set({ nPoints: v }),
    setORadius: (v: number) => set({ oRadius: v }),
    setIRadius: (v: number) => set({ iRadius: v }),
}));