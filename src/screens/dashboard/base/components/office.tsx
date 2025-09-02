import React from 'react';

const Office = () => {
  return (
    <div className='bg-background-600 text-white py-[28px] border flex flex-col border-border-100 rounded-[10px] font-inter w-[275px]'>
      <div className='flex justify-between items-center mb-5 px-[15px]'>
        <h1 className='text-[17px] font-semibold'>Office 2</h1>
        <div className='bg-background-700 text-text-300 px-[10px] py-[2px] rounded-full text-[10px] font-medium'>
          LVL 3
        </div>
      </div>
      <div className='grid grid-cols-3 gap-[10px] pb-[15px] border-b border-b-border-100 mb-6 px-[15px]'>
        <div className='bg-black-300 rounded-[7px] p-[10px] border border-border-200'>
          <h3 className='text-text-400 text-[8px] font-medium mb-1 whitespace-nowrap'>
            Employees
          </h3>
          <div className='text-[12px] font-bold text-white mb-1'>7/10</div>
          <div className='w-full bg-[#B2B2B2] rounded-full h-[5px]'>
            <div
              className='bg-white h-[5px] rounded-full'
              style={{ width: '70%' }}
            ></div>
          </div>
        </div>
        <div className='bg-black-300 rounded-[7px] p-[10px] border border-border-200'>
          <h3 className='text-text-400 text-[8px] font-medium mb-1 whitespace-nowrap'>
            Upgrade price
          </h3>
          <div className='text-[12px] font-bold text-white mb-1'>$25,00</div>
          <div className='text-text-400 text-[8px]'>= 10 DOMO</div>
        </div>
        <div className='bg-black-300 rounded-[7px] p-[10px] border border-border-200'>
          <h3 className='text-text-400 text-[8px] font-medium mb-1 whitespace-nowrap'>
            Total income
          </h3>
          <div className='text-[12px] font-bold text-white mb-1'>$19,24</div>
          <div className='text-text-400 text-[8px]'>Across all</div>
        </div>
      </div>
      <div className='text-center mb-[25px]'>
        <div className='text-text-500 text-[11px] font-semibold mb-1'>
          Current income
        </div>
        <div className='text-[17px] font-bold text-white mb-1'>$10,78</div>
        <div className='text-text-500 text-[11px]'>
          Accumulated in this office
        </div>
      </div>

      {/* Information Section */}
      <div className='grid grid-cols-2 gap-4 mb-[15px] px-[15px]'>
        <div className='bg-black-300 rounded-[7px] p-[10px] border border-border-200'>
          <h3 className='text-text-400 text-[8px] font-medium mb-1'>
            Next LVL
          </h3>
          <div className='text-[11px] font-bold text-white mb-1'>
            Capacity 10 → 12
          </div>
          <div className='text-text-400 text-[8px]'>
            Office level affects capacity
          </div>
        </div>

        <div className='bg-black-300 rounded-[7px] p-[10px] border border-border-200'>
          <h3 className='text-text-400 text-[8px] font-medium mb-1'>Tip</h3>
          <ul className='text-white space-y-1 text-[8px]'>
            <li>• Income comes from employees</li>
            <li>• Office level doesn't add multipliers.</li>
          </ul>
        </div>
      </div>
      <div className='space-y-3 px-[15px]'>
        <button className='w-full bg-white text-backbg-background-600 py-2 px-6 rounded-lg font-medium hover:bg-background-700 transition-all active:scale-95 text-background-100'>
          Collect
        </button>
        <button className='w-full bg-background-700 text-backbg-background-600 py-2 px-6 rounded-lg font-medium hover:bg-background-700 transition-all active:scale-95 text-background-100'>
          Upgrade LVL
        </button>
      </div>
    </div>
  );
};

export default Office;
