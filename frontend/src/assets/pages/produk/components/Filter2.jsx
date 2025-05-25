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
        'Pemasaran',
        'Digital & Teknologi',
        'Pengembangan Diri',
        'Bisnis Manajemen',
    ];

    return (
        <div>
            <div className="flex flex-col justify-center border border-[#3A35411F] rounded-lg p-5 gap-[18px]">
                <div
                    className="relative flex items-center gap-4 cursor-pointer"
                    onClick={handleToggle}
                >
                    <svg
                        className="min-w-[20px] min-h-[20px]"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 5C7 6.65685 8.34315 8 10 8C11.6569 8 13 6.65685 13 5M1 13.8002V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V13.8036C19 14.9215 19 15.4805 18.7822 15.9079C18.5905 16.2842 18.2837 16.5905 17.9074 16.7822C17.48 17 16.921 17 15.8031 17H4.19691C3.07899 17 2.5192 17 2.0918 16.7822C1.71547 16.5905 1.40973 16.2842 1.21799 15.9079C1 15.4801 1 14.9203 1 13.8002Z"
                            stroke="#3ECF4C"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p className={`text-[16px] ${isOpen ? 'text-[#3EFC4C]' : 'text-[#333333AD]'} font-poppins font-[500]`}>Harga</p>
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
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`transition-all ${checkedItems[label] ? 'fill-[#bcffc4] stroke-[#3ECF4C]' : 'fill-[#E2FCD9]/80 stroke-[#3ECF4C]'}`}>
                                        <rect x="0.4" y="0.5" width="16" height="16" rx="3.5" />
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
