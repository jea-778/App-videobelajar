import React from 'react';

export default function Tabs({ activeTab, handleActiveTab }) {
  const tabs = [
    { id: 1, name: 'Semua Kelas' },
    { id: 2, name: 'Pemasaran' },
    { id: 3, name: 'Desain' },
    { id: 4, name: 'Pengembangan Diri' },
    { id: 5, name: 'Bisnis' },
  ];

  return (
    <div className="flex justify-start">
      <div className="flex gap-12 pl-[0px] md:pl-[60px] lg:pl-[10px] xl:pl-[10px] pt-11 pb-7 text-[#333333AD] font-[500] leading-[22.4px] tracking-[0.2px]">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            onClick={() => handleActiveTab(tab.id)}
            style={{ color: activeTab === tab.id || (!activeTab && tab.id === 1) ? '#F64920' : '#333333AD' }}
            className={`flex whitespace-nowrap items-center text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] font-sans font-[500] cursor-pointer`}
          >
            {tab.name} 
          </a>
        ))}
      </div>
    </div>
  );
}