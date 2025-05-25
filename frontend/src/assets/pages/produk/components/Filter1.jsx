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
                        className="min-w-[18px] min-h-[18px]"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71547 1.21799 2.0918C1 2.51962 1 3.08009 1 4.2002V13.8002C1 14.9203 1 15.4801 1.21799 15.9079C1.40973 16.2842 1.71547 16.5905 2.0918 16.7822C2.5192 17 3.07899 17 4.19691 17H5M5 1H13.8002C14.9203 1 15.4796 1 15.9074 1.21799C16.2837 1.40973 16.5905 1.71547 16.7822 2.0918C17 2.5192 17 3.07899 17 4.19691V13.8036C17 14.9215 17 15.4805 16.7822 15.9079C16.5905 16.2842 16.2837 16.5905 15.9074 16.7822C15.48 17 14.921 17 13.8031 17H5M5 1V17M9 8H13M9 5H13"
                            stroke="#3ECF4C"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p className={`text-[16px] ${isOpen ? 'text-[#3EFC4C]' : 'text-[#333333AD]'} font-poppins font-[500]`}>Bidang Studi</p>
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
