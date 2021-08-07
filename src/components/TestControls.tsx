import React from 'react';
import { viewBoxSize } from './TestView';
import { GithubLogoInline } from './XtraAppHeader';

export type TestControlsProps = {
    nPoints: number;
    oRadius: number;
    iRadius: number;
    setNPoints: (v: number) => void;
    setORadius: (v: number) => void;
    setIRadius: (v: number) => void;

    body: React.ReactNode;
    href: string;
};

function TestControls(props: TestControlsProps) {
    const { nPoints, setNPoints, oRadius, setORadius, iRadius, setIRadius, body, href } = props;

    return (<div className="px-4 py-2 flex space-x-4">
        {/* View */}
        <div className="w-32 h-32 text-blue-500 border-4 rounded-md border-blue-100 bg-gray-50">
            {body}
        </div>
        <div className="flex flex-col justify-between text-sm">
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
            <div className="flex items-center text-blue-400">
                <a className="text-sm pb-1 mr-1"  href={href} target="_blank">source:</a>
                <GithubLogoInline href={href} />
            </div>
        </div>
    </div>
    );
}


export default TestControls;
