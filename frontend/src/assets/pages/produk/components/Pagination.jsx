import React from 'react'

export default function Pagination() {
    return (
        <div>
            <div className="flex items-center gap-2">
                <button className="w-8 h-8 md:w-10 md:h-10 rounded bg-[#F4F5FA] flex items-center justify-center">
                    <svg width="24" height="24" fill="#222325">
                        <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" />
                    </svg>
                </button>

                <button className="w-8 h-8 md:w-10 md:h-10 rounded bg-[#FFBD3A] text-white font-bold">1</button>

                <button className="w-8 h-8 md:w-10 md:h-10 rounded bg-[#F4F5FA] text-[#222325]">2</button>
                <button className="w-8 h-8 md:w-10 md:h-10 rounded bg-[#F4F5FA] text-[#222325]">3</button>
                <button className="w-8 h-8 md:w-10 md:h-10 rounded bg-[#F4F5FA] text-[#222325]">4</button>
                <button className="w-8 h-8 md:w-10 md:h-10 rounded bg-[#F4F5FA] text-[#222325]">5</button>
                <button className="w-8 h-8 md:w-10 md:h-10 rounded bg-[#F4F5FA] text-[#222325]">6</button>

                <button className="w-8 h-8 md:w-10 md:h-10 rounded bg-[#F4F5FA] flex items-center justify-center">
                    <svg width="24" height="24" fill="#222325">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
                    </svg>
                </button>
            </div>

        </div>
    )
}
