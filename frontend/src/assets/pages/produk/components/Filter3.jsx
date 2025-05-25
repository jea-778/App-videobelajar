import React, { useState, useEffect } from 'react';

export default function Filter1({ reset }) {
    const [isOpen, setIsOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});

    useEffect(() => {
        if (reset) {
            setIsOpen(false);
            setCheckedItems({});
        }
    }, [reset]);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleCheckboxChange = (label) => {
        setCheckedItems((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const labels = [
        'Kurang dari 4 Jam',
        '4 - 8 Jam',
        'Lebih dari 8 Jam',
    ];

    return (
        <div>
            <div className="flex flex-col justify-center border border-[#3A35411F] rounded-lg p-5 gap-[18px]">
                <div
                    className="relative flex items-center gap-4 cursor-pointer"
                    onClick={handleToggle}
                >
                    <svg
                        className='min-h-[20px] min-w-[20px]'
                        width="20"
                        height="20"
                        iewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">

                        <path
                            d="M10 5V10H15M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19Z" stroke="#3ECF4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p className={`text-[16px] ${isOpen ? 'text-[#3EFC4C]' : 'text-[#333333AD]'} font-poppins font-[500]`}>Durasi</p>
                    <svg className={`absolute top-[4px] right-0 cursor-pointer transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M0 1.41L6 7.41L12 1.41L10.59 0L6 4.58L1.41 0L0 1.41Z" fill="#3ECF4C" />
                    </svg>
                </div>

                {isOpen && (
                    <div className="flex flex-col gap-4">
                        {labels.map((label, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="peer hidden"
                                        checked={!!checkedItems[label]}
                                        onChange={() => handleCheckboxChange(label)}
                                    />
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`min-h-[20px] min-w-[20px]: transition-all ${checkedItems[label] ? 'fill-[#bcffc4] stroke-[#3ECF4C]' : 'fill-[#E2FCD9]/80 stroke-[#3ECF4C]'}`}>
                                        <circle cx="9" cy="9" r="8" />
                                    </svg>


                                </label>
                                <label className={`text-[16px] ${checkedItems[label] ? 'text-[#3EFC4C]' : 'text-[#333333AD]'} font-poppins`}>
                                    {label}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

