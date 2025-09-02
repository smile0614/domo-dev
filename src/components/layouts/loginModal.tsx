import { useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect } from 'react';

import WalletButton from '@/components/wallets/walletButton';

import Icon1 from '~/svg/icon1.svg';
import Icon2 from '~/svg/icon2.svg';
import Icon3 from '~/svg/icon3.svg';
import Icon4 from '~/svg/icon4.svg';
import Icon5 from '~/svg/icon5.svg';
import Icon6 from '~/svg/icon6.svg';
import Icon7 from '~/svg/icon7.svg';
import VerifyIcon from '~/svg/verify.svg';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tokenomicIcons = [
  {
    id: 1,
    icon: Icon1,
  },
  {
    id: 2,
    icon: Icon2,
  },
  {
    id: 3,
    icon: Icon3,
  },
  {
    id: 4,
    icon: Icon4,
  },
  {
    id: 5,
    icon: Icon5,
  },
  {
    id: 6,
    icon: Icon6,
  },
  {
    id: 7,
    icon: Icon7,
  },
];

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { connected } = useWallet();

  useEffect(() => {
    if (connected && isOpen) {
      onClose();
    }
  }, [connected, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 overflow-y-auto'>
      <div className='flex min-h-screen justify-center px-[200px] py-[105px] w-full'>
        <div className='fixed inset-0 bg-[#565656]' onClick={onClose} />
        <div className='flex overflow-hidden bg-[#282828] shadow-xl w-full z-10'>
          <div className='flex flex-col gap-y-8 max-w-[950px] w-full flex-1 bg-[#282828] px-8 pt-24'>
            <h2 className='xs:text-[3rem] xs:leading-[3.75rem] md:text-[4rem] md:leading-[4.75rem] font-normal uppercase text-white'>
              TOKENOMICS
            </h2>
            <div className='bg-[#919191] px-4 py-1 justify-center gap-2 sm:gap-4 flex'>
              {tokenomicIcons.map(({ id, icon: Icon }) => (
                <Icon
                  key={id}
                  className='filter grayscale w-[72px] h-[86px]'
                  alt={`icons ${id}`}
                />
              ))}
            </div>
            <p className='xs:text-3xl md:text-[2.25rem] leading-10 text-white font-normal w-full'>
              Domokun watches his figure, however, he's so fond of catching a
              high from endless SOL crafting. That's why he's so full with a
              wide mouth. So you help the guy get full, play like it's your last
              time!
            </p>
            <a
              href='https://raydium.io/swap/?outputCurrency=2CfHy8S118K4RPg9ti2bWFc19tFg48qTmJSvqqbhpump&inputMint=sol&outputMint=2CfHy8S118K4RPg9ti2bWFc19tFg48qTmJSvqqbhpump'
              target='_blank'
              className='text-xl font-normal text-center leading-6 transition-all border w-fit py-3 px-4 bg-[#565656] border-[#565656] hover:bg-transparent hover:text-white text-[#282828]'
            >
              buy domo
            </a>
          </div>
          <div className='flex w-[40%] flex-col bg-[#919191] text-center justify-center items-center font-serif px-[50px]'>
            <p className='font-inter font-bold text-[40px] leading-10 text-white tracking-wide'>
              JOIN
            </p>
            <p className='font-inter font-bold text-[40px] leading-10 text-white tracking-wide mt-2'>
              DOMO VERSE
            </p>
            <WalletButton variant='modal' />
            <button className='bg-[#CACACA] active:scale-95 transition-all max-w-[451px] w-full h-[65px] rounded-[10px] border border-white outline-none text-center mt-[30px] flex justify-center items-center gap-5'>
              <VerifyIcon className='w-8 h-8' />
              <p className='font-inter font-semibold text-[20px] text-[#4A4A4A] tracking-wider'>
                Click to verify
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
