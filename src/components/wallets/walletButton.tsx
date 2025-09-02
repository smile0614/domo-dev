import { useWallet } from '@solana/wallet-adapter-react';
import {
  useWalletModal,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

interface WalletButtonProps {
  variant?: 'default' | 'modal';
}

export const WalletButton: FC<WalletButtonProps> = ({
  variant = 'default',
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const walletContext = useWallet();
  const { publicKey, connected } = walletContext;
  const { setVisible } = useWalletModal();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const handleLogin = async () => {
      if (!publicKey || !connected || isLoggingIn) return;

      try {
        setIsLoggingIn(true);

        toast.success('Successfully logged in! Redirecting to dashboard...');
      } catch (error) {
        toast.error('Failed to login. Please try again.');
      } finally {
        setIsLoggingIn(false);
      }
    };

    handleLogin();
  }, [walletContext, publicKey, connected, isLoggingIn]);

  useEffect(() => {
    if (connected && !pathname.includes('/dashboard')) {
      router.push('/dashboard');
    } else if (!connected && pathname.includes('/dashboard')) {
      router.push('/');
    }
  }, [connected, pathname, router]);

  if (variant === 'modal') {
    return (
      <div className='flex flex-col items-center w-full'>
        <button
          className='bg-white active:scale-95 transition-all max-w-[451px] w-full h-[65px] rounded-[10px] border-none outline-none text-center items-center mt-[45px]'
          onClick={() => setVisible(true)}
          disabled={isLoggingIn}
        >
          <p className='font-inter font-semibold text-[24px] text-[#4A4A4A]'>
            LOGIN WITH WALLET
          </p>
        </button>
        {isLoggingIn && (
          <div className='text-sm text-white mt-2'>Logging in...</div>
        )}
      </div>
    );
  }

  return (
    <div className='flex items-center gap-4'>
      <WalletMultiButton />
    </div>
  );
};

export default WalletButton;
