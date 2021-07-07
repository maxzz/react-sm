import React, { ReactNode, useState } from 'react';
import './App.css';
import TestSection from './components/TestView';
import { LogoReact, LogoContext, LogoRedux, LogoZustand, LogoJotai } from './components/XtraLogos';

function Section({ logo, title, children }: { logo: ReactNode, title: string; children: ReactNode; }) {
    return (
        <section className="mb-4">
            <header className="px-4 py-3 text-2xl bg-blue-500 flex justify-between" style={{ boxShadow: '0px 2px 1px rgba(0,0,0, .2)' }}>
                <div className="">
                    {logo}
                </div>
                <div className="">{title}</div>
            </header>
            {children}
        </section>
    );
}

function App() {
    return (
        <div className="h-screen bg-blue-50 flex-col text-blue-200">
            <Section title="Redux" logo={LogoRedux()}>
                <TestSection />
            </Section>
            <Section title="Context Provider/Consumer" logo={LogoContext()}>
                <TestSection />
            </Section>
            <Section title="Zustand" logo={LogoZustand()}>
                <TestSection />
            </Section>
            <Section title="Jotai / Recoil" logo={LogoJotai()}>
                <TestSection />
            </Section>
        </div>
    );
}

export default App;
