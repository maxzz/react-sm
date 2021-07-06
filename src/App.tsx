import React, { useState } from 'react';
import './App.css';

function App() {
    return (
        <div className="h-screen bg-blue-50 flex-col text-blue-200">
            <section className="mb-4" style={{boxShadow: '0px 2px 1px rgba(0,0,0, .2)'}}>
                <header className="py-2 text-2xl bg-blue-500 flex">
                    Redux
                </header>
            </section>
            <section className="mb-4" style={{boxShadow: '0px 2px 1px rgba(0,0,0, .2)'}}>
                <header className="py-2 text-2xl bg-blue-500 flex">
                    Context Provider/Consumer
                </header>
            </section>
            <section className="mb-4" style={{boxShadow: '0px 2px 1px rgba(0,0,0, .2)'}}>
                <header className="py-2 text-2xl bg-blue-500 flex">
                    Zustand
                </header>
            </section>
            <section className="mb-4" style={{boxShadow: '0px 2px 1px rgba(0,0,0, .2)'}}>
                <header className="py-2 text-2xl bg-blue-500 flex">
                    Jotai / Recoil
                </header>
            </section>
        </div>
    );
}

export default App;
