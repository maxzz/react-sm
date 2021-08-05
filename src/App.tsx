import React, { ReactNode } from 'react';
import './App.css';
import { LogoReact, LogoContext, LogoRedux, LogoZustand, LogoJotai } from './components/XtraLogos';
import XtraAppHeader from './components/XtraAppHeader';
import TestSectionReact from './components/Show1React/TestSectionReact';
import TestSectionContext from './components/Show2Context/TestSectionContext';
import TestSectionRedux from './components/Show3Redux/TestSectionRedux';
import TestSectionZustand from './components/Show4Zustand/TestSectionZustand';
import TestSectionJotai from './components/Show5Jotai/TestSectionJotai';

function Section({ logo, title, children }: { logo: ReactNode, title: string; children: ReactNode; }) {
    return (
        <section className="">
            <header className="px-4 py-3 text-2xl bg-blue-500 flex justify-between" style={{ boxShadow: '0px 2px 1px rgba(0,0,0, .2)' }}>
                <div className="">
                    {logo}
                </div>
                <div className="" style={{ textShadow: '#00000021 3px 2px' }}>{title}</div>
            </header>
            {children}
        </section>
    );
}

function App() {
    return (
        <div className="relative">
            <div 
                className="absolute left-0 top-0 h-full py-2 pl-1 flex justify-end text-4xl font-mono font-black bg-blue-200 text-white"
                style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}
            >React State Management</div>

            <div className="h-screen max-w-lg mx-auto bg-blue-50 flex-col text-blue-200">
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
    );
}

export default App;
