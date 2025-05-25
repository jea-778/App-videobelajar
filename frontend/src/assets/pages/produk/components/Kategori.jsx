import React, { useState } from 'react';
import Filter1 from './Filter1';
import Filter2 from './Filter2';
import Filter3 from './Filter3';
import ResetFeature from './ResetFeature';

export default function Kategori() {
    const [resetSignal, setResetSignal] = useState(false);

    const handleReset = () => {
        setResetSignal(true);
        setTimeout(() => setResetSignal(false), 0);
    };

    return (
        <div>
            <div className='flex flex-col bg-white border rounded-lg border-[#3A35411F] p-5 gap-4 w-full sm:w-[366px] '>
                <ResetFeature onReset={handleReset} />
                <div className='flex flex-col gap-4'>
                    <Filter1 reset={resetSignal} />
                    <Filter2 reset={resetSignal} />
                    <Filter3 reset={resetSignal} />
                </div>
            </div>
        </div>
    );
}
