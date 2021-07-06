import React, { ReactNode, useState } from 'react';
import './App.css';

function Section({ title, children }: { title: string; children: ReactNode; }) {
    return (
        <section className="mb-4">
            <header className="px-4 py-3 text-2xl bg-blue-500 flex justify-between" style={{ boxShadow: '0px 2px 1px rgba(0,0,0, .2)' }}>
                <div className="">Logo</div>
                <div className="">{title}</div>
            </header>
            {children}
        </section>
    );
}

function App() {
    return (
        <div className="h-screen bg-blue-50 flex-col text-blue-200">
            <Section title="Redux">

            </Section>
            <Section title="Context Provider/Consumer">

            </Section>
            <Section title="Zustand">

            </Section>
            <Section title="Jotai / Recoil">

            </Section>
        </div>
    );
}

export default App;
