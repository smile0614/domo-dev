'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';

const BankScreen = () => {
  const { disconnect } = useWallet();

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <div className='flex flex-col w-full py-[70px] gap-[30px] max-w-[1400px] mx-auto'>
      <h1 className='text-[32px] font-semibold text-white'>Bank</h1>
      <div className='flex flex-col gap-5 w-full'>
        <div className='flex justify-between'>
          <div className='rounded-[10px] bg-[#9C9C9C] p-[15px] w-[320px] flex flex-col gap-1'>
            <p className='text-[14px] font-semibold text-[#ECECEC]'>
              DOMO balance
            </p>
            <p className='text-[20px] text-white font-semibold'>1240</p>
          </div>
          <div className='rounded-[10px] bg-[#9C9C9C] p-[15px] w-[320px] flex flex-col gap-1'>
            <p className='text-[14px] font-semibold text-[#ECECEC]'>
              SOL balance
            </p>
            <p className='text-[20px] text-white font-semibold'>0,528</p>
          </div>
          <div className='rounded-[10px] bg-[#9C9C9C] p-[15px] w-[320px] flex flex-col gap-1'>
            <div className='flex justify-between'>
              <p className='text-[14px] font-semibold text-[#ECECEC]'>
                Wallet: Phantom
              </p>
              <button
                className='bg-background-700 rounded-full h-4 w-[70px] flex items-center justify-center'
                onClick={handleDisconnect}
              >
                <p className='text-text-300 text-[10px] font-medium'>
                  Disconnect
                </p>
              </button>
            </div>
            <p className='text-[20px] text-white font-semibold'>Connected</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <div className='w-full rounded-[10px] bg-[#9C9C9C] p-[15px] flex flex-col gap-[10px]'>
            <p className='text-[16px] font-semibold text-[#ECECEC]'>
              Exchange rates
            </p>
            <div className='flex flex-col gap-1'>
              <p className='text-[14px] font-semibold text-[#ECECEC] leading-none'>
                1 SOL = $1
              </p>
              <p className='text-[14px] font-semibold text-[#ECECEC] leading-none'>
                1 DOMO = $1
              </p>
            </div>
            <p className='text-[11px] text-text-500 font-medium'>
              Rates are used for preview, final conversion upon payment
            </p>
          </div>
          <div className='w-full rounded-[10px] bg-[#9C9C9C] p-[15px] flex flex-col gap-[10px]'>
            <p className='text-[16px] font-semibold text-[#ECECEC]'>
              Percent on SOL
            </p>
            <div className='flex gap-1 items-center'>
              <p className='text-[14px] font-semibold text-[#ECECEC] leading-none'>
                0.055% / d
              </p>
              <p className='text-[11px] font-semibold text-text-500 leading-none'>
                (=20% annualy)
              </p>
            </div>
            <p className='text-[11px] text-text-500 font-medium'>
              Next charge in: 05:23:12
            </p>
          </div>
          <div className='w-full rounded-[10px] bg-[#C6C6C6] p-[15px] flex flex-col gap-[10px]'>
            <p className='text-[16px] font-semibold text-[#ECECEC]'>
              Credited today
            </p>
            <div className='flex gap-1'>
              <p className='text-[14px] font-semibold text-[#828282] leading-none'>
                +0,0017 SOL
              </p>
            </div>
            <p className='text-[11px] text-[#828282] font-medium'>
              Credited to the bank
            </p>
          </div>
        </div>
        <div className='flex gap-5'>
          <div className='w-full rounded-[10px] bg-[#9C9C9C] p-[15px] flex flex-col gap-[15px]'>
            <p className='text-[16px] font-semibold text-[#ECECEC]'>
              Deposit DOMO
            </p>
            <div className='flex flex-col gap-[10px]'>
              <div className='flex gap-2'>
                <input
                  type='text'
                  value='250'
                  className='flex-1 bg-[#5F5F5F] rounded-[7px] px-3 py-2 text-white placeholder-white'
                  placeholder='Amount'
                />
                <button className='active:scale-95 transition-all cursor-pointer bg-[#828282] rounded-[7px] px-3 py-2 text-white text-[12px] font-medium'>
                  25%
                </button>
                <button className='active:scale-95 transition-all cursor-pointer bg-[#828282] rounded-[7px] px-3 py-2 text-white text-[12px] font-medium'>
                  50%
                </button>
                <button className='active:scale-95 transition-all cursor-pointer bg-[#828282] rounded-[7px] px-3 py-2 text-white text-[12px] font-medium'>
                  Max
                </button>
              </div>
              <div className='flex flex-col gap-2 bg-[#5F5F5F] rounded-[7px] p-3'>
                <p className='text-[14px] font-semibold text-[#ECECEC]'>
                  Deposit address (server wallet)
                </p>
                <div className='flex gap-2 items-center'>
                  <p className='text-[10px] text-[#3D3D3D] font-mono bg-[#A7A7A7] px-2 py-[2px] rounded'>
                    9xQ...T7kH3F
                  </p>
                  <button className='active:scale-95 transition-all cursor-pointer bg-[#A7A7A7] rounded-[7px] px-3 py-[2px] text-[#3D3D3D] text-[10px] font-medium'>
                    Copy
                  </button>
                  <button className='active:scale-95 transition-all cursor-pointer bg-[#A7A7A7] rounded-[7px] px-3 py-[2px] text-[#3D3D3D] text-[10px] font-medium'>
                    Show QR
                  </button>
                </div>
                <p className='text-[11px] text-text-500 font-medium'>
                  Crediting takes up to 5 minutes after network confirmation
                </p>
              </div>
              <div className='flex gap-3 justify-end pt-2'>
                <button className='active:scale-95 transition-all cursor-pointer bg-[#BEBEBE] rounded-[7px] py-2 text-[#3B3B3B] text-[13px] font-semibold w-[82px]'>
                  Cancel
                </button>
                <button className='active:scale-95 transition-all cursor-pointer bg-[#FDFDFD] rounded-[7px] py-2 text-[#3B3B3B] text-[13px] font-semibold w-[246px]'>
                  Sent checked the crediting
                </button>
              </div>
            </div>
          </div>

          {/* Withdraw DOMO Panel */}
          <div className='w-full rounded-[10px] bg-[#9C9C9C] p-[15px] flex flex-col gap-[15px]'>
            <p className='text-[16px] font-semibold text-[#ECECEC]'>
              Withdraw DOMO
            </p>
            <div className='flex flex-col gap-[10px]'>
              <div className='flex flex-col gap-2'>
                <input
                  type='text'
                  value='8wP...4dXq'
                  className='w-full bg-[#5F5F5F] rounded-[7px] px-3 py-2 text-white placeholder-white'
                  placeholder='Wallet address'
                />
                <div className='flex gap-2'>
                  <input
                    type='text'
                    value='0,15'
                    className='flex-1 bg-[#5F5F5F] rounded-[7px] px-3 py-2 text-white placeholder-white'
                    placeholder='Amount'
                  />
                  <button className='active:scale-95 transition-all cursor-pointer bg-[#828282] rounded-[7px] px-3 py-2 text-white text-[12px] font-medium'>
                    Max
                  </button>
                </div>
              </div>
              <div className='bg-[#5F5F5F] rounded-[7px] p-3'>
                <div className='flex justify-between text-[13px] font-medium text-white'>
                  <span>Withdraw</span>
                  <span>0,1495 SOL</span>
                </div>
                <div className='flex justify-between text-[11px] text-[#B9B9B9] mt-1'>
                  <span>Network fee</span>
                  <span>0,0005 SOL</span>
                </div>
              </div>
              <div className='flex gap-3 justify-end pt-2'>
                <button className='active:scale-95 transition-all cursor-pointer bg-[#BEBEBE] rounded-[7px] py-2 text-[#3B3B3B] text-[13px] font-semibold w-[82px]'>
                  Cancel
                </button>
                <button className='active:scale-95 transition-all cursor-pointer bg-[#FDFDFD] rounded-[7px] py-2 text-[#3B3B3B] text-[13px] font-semibold w-[246px]'>
                  Withdraw
                </button>
              </div>
              <p className='text-[11px] text-text-500 font-medium'>
                To withdraw, you need to link your wallet. We ask you{' '}
                <span className='text-white'>to sign</span>
                the message - it's free.
              </p>
            </div>
          </div>
        </div>
        {/* Transaction History */}
        <div className='w-full rounded-[10px] bg-[#9C9C9C] p-[15px] flex flex-col gap-[15px]'>
          <div className='flex justify-between items-center'>
            <p className='text-[16px] font-semibold text-white'>
              Transaction history
            </p>
            <div className='flex gap-2'>
              <select className='bg-[#5F5F5F] rounded-[7px] px-3 py-[2px] w-[104px] text-[#CDCDCD] text-[12px] font-medium'>
                <option>All</option>
              </select>
              <select className='bg-[#5F5F5F] rounded-[7px] px-3 py-[2px] w-[104px] text-[#CDCDCD] text-[12px] font-medium'>
                <option>30 days</option>
              </select>
            </div>
          </div>

          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-[#828282]'>
                  <th className='text-left text-[13px] text-[#676767] font-medium pb-2'>
                    Date/time
                  </th>
                  <th className='text-left text-[13px] text-[#676767] font-medium pb-2'>
                    Type
                  </th>
                  <th className='text-left text-[13px] text-[#676767] font-medium pb-2'>
                    Amount
                  </th>
                  <th className='text-left text-[13px] text-[#676767] font-medium pb-2'>
                    Status
                  </th>
                  <th className='text-left text-[13px] text-[#676767] font-medium pb-2'>
                    Tx
                  </th>
                </tr>
              </thead>
              <tbody className='text-[13px] text-[#4F4F4F] font-medium'>
                <tr className='border-b border-[#828282]'>
                  <td className='py-1'>21.08.2025 / 10:12</td>
                  <td>Interest %</td>
                  <td>+0,017 SOL</td>
                  <td>
                    <div className='rounded-full px-2 py-[2px] text-[10px] text-[#686868] bg-[#CFCFCF] w-[70px]'>
                      Done
                    </div>
                  </td>
                  <td>
                    <button className='active:scale-95 transition-all cursor-pointer border border-[#3D3D3D] text-[#3D3D3D] text-[10px] font-semibold rounded w-[62px] text-center'>
                      Explorer
                    </button>
                  </td>
                </tr>
                <tr className='border-b border-[#828282]'>
                  <td className='py-1'>21.08.2025 / 8:44</td>
                  <td>Withdraw SOL</td>
                  <td>-0,200 SOL</td>
                  <td>
                    <div className='rounded-full px-2 py-[2px] text-[10px] text-[#686868] bg-[#CFCFCF] w-[70px]'>
                      In progress
                    </div>
                  </td>
                  <td>
                    <button className='active:scale-95 transition-all cursor-pointer border border-[#3D3D3D] text-[#3D3D3D] text-[10px] font-semibold rounded w-[62px] text-center'>
                      Explorer
                    </button>
                  </td>
                </tr>
                <tr className='border-b border-[#828282]'>
                  <td className='py-1'>21.08.2025 / 07:00</td>
                  <td>Deposit DOMO</td>
                  <td>+500 DOMO</td>
                  <td>
                    <div className='rounded-full px-2 py-[2px] text-[10px] text-[#686868] bg-[#CFCFCF] w-[70px]'>
                      Done
                    </div>
                  </td>
                  <td>
                    <button className='active:scale-95 transition-all cursor-pointer border border-[#3D3D3D] text-[#3D3D3D] text-[10px] font-semibold rounded w-[62px] text-center'>
                      Explorer
                    </button>
                  </td>
                </tr>
                <tr className='border-b border-[#828282]'>
                  <td className='py-1'>20.08.2025 / 22:10</td>
                  <td>Deposit DOMO</td>
                  <td>+250 DOMO</td>
                  <td>
                    <div className='rounded-full px-2 py-[2px] text-[10px] text-[#686868] bg-[#CFCFCF] w-[70px]'>
                      Rejected
                    </div>
                  </td>
                  <td>
                    <button className='active:scale-95 transition-all cursor-pointer border border-[#3D3D3D] text-[#3D3D3D] text-[10px] font-semibold rounded w-[62px] text-center'>
                      Explorer
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-[11px] text-text-500 font-medium text-center'>
            No entries? Start with a DOMO deposit or wait for daily interest
            accrual
          </p>
        </div>
        {/* Informational Panels */}
        <div className='flex gap-5'>
          <div className='w-full rounded-[10px] bg-[#9C9C9C] p-[15px] flex flex-col gap-2'>
            <p className='text-[16px] font-semibold text-[#ECECEC]'>Security</p>
            <p className='text-[11px] text-text-500 font-medium'>
              Never enter seed phrases. We only ask for a message signature when
              performing actions.
            </p>
          </div>
          <div className='w-full rounded-[10px] bg-[#9C9C9C] p-[15px] flex flex-col gap-2'>
            <p className='text-[16px] font-semibold text-[#ECECEC]'>
              Notification
            </p>
            <p className='text-[11px] text-text-500 font-medium'>
              Interest is only charged on SOL at the bank.
            </p>
          </div>
          <div className='w-full rounded-[10px] bg-[#9C9C9C] p-[15px] flex flex-col gap-2'>
            <p className='text-[16px] font-semibold text-[#ECECEC]'>Support</p>
            <p className='text-[11px] text-text-500 font-medium'>
              Problems with transaction? Contact support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankScreen;
