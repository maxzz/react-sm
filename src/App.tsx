import React, { ReactNode } from 'react';
import './App.scss';
import { LogoReact, LogoContext, LogoRedux, LogoZustand, LogoJotai } from './components/XtraLogos';
import XtraAppHeader from './components/XtraAppHeader';
import TestSectionReact from './components/Show1React/TestSectionReact';
import TestSectionContext from './components/Show2Context/TestSectionContext';
import TestSectionRedux from './components/Show3Redux/TestSectionRedux';
import TestSectionZustand from './components/Show4Zustand/TestSectionZustand';
import TestSectionJotai from './components/Show5Jotai/TestSectionJotai';
import { useTimeout } from 'beautiful-react-hooks';
import noiseBkg from './assets/noise-gen.png';

function Section({ logo, title, children }: { logo: ReactNode, title: string; children: ReactNode; }) {
    const logoRef = React.useRef<HTMLDivElement>(null);

    useTimeout(() => {
        logoRef.current && (logoRef.current.style.transform = 'scale(1)');
    }, Math.round((Math.random() + 2) * 1000));

    return (
        <section className="bg-blue-300 text-blue-200">
            <header
                className="px-4 py-3 text-2xl bg-blue-500 flex justify-between"
                style={{
                    boxShadow: '0px 2px 1px rgba(0,0,0, .2)',
                    background: 'linear-gradient(to right, rgb(65, 155, 255), rgb(0, 68, 141))',
                }}
            >
                <div ref={logoRef} className="" style={{ transform: 'scale(1.5)' }}>
                    {logo}
                </div>
                <div className="" style={{ textShadow: '#00000021 3px 2px' }}>{title}</div>
            </header>
            {children}
        </section>
    );
}

function Background() {
    return (
        <div className="fixed h-full w-full flex bg-[#808080]">
            <div
                className="
                py-[2vw] px-[1vw]
                hidden sm:flex justify-end
                font-sans uppercase font-black text-[#9ccbff] bg-blue-200"
                style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    textShadow: 'rgb(255 255 255 / 70%) 1px 1px 2px, rgb(59 130 246 / 52%) 0px 0px 0.1em, rgb(115 168 255 / 49%) 0px 0px 0.1em',
                    backgroundColor: '#98c9ff',
                    boxShadow: '5px -9px 2px 5px #779cc485',
                    fontSize: 'calc(24px + 6 * ((100vw - 320px) / 680))',
                }}
            >
                <div className="">React State Management</div>
                <div className="py-2" style={{ fontSize: 'calc(12px + 6 * ((100vw - 320px) / 680))' }}>2021</div>
            </div>
            <div
                className="flex-1"
                style={{
                    backgroundImage: `url(${noiseBkg}), linear-gradient(to right bottom, #0889fc, #ff6a00)`,
                    mixBlendMode: 'hard-light',
                    opacity: 1,
                }}
            ></div>
        </div>
    );
}

function App() {
    return (
        <>
            <Background />
            <div className="relative flex sm:pl-16 pl-0">
                <div className="max-w-lg mx-auto bg-transparent space-y-1">
                    <XtraAppHeader />
                    <Section title="React" logo={<LogoReact />}>
                        <TestSectionReact />
                    </Section>
                    <Section title="Context API" logo={<LogoContext />}>
                        <TestSectionContext />
                    </Section>
                    <Section title="Redux Toolkit" logo={<LogoRedux />}>
                        <TestSectionRedux />
                    </Section>
                    <Section title="Zustand" logo={<LogoZustand />}>
                        <TestSectionZustand />
                    </Section>
                    <Section title="Jotai / Recoil" logo={<LogoJotai />}>
                        <TestSectionJotai />
                    </Section>
                </div>
            </div>
        </>
    );
}

export default App;
