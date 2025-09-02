/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Button from '@/components/buttons';

const Docs = () => {
  return (
    <div id='docs' className='  bg-dark'>
      <div className='w-full xs:max-w-[94%] xl:max-w-[77.5rem] mx-auto xs:py-12 overflow-hidden md:py-24 md:pb-32 relative flex justify-between xs:flex-col-reverse sm:flex-row gap-8'>
        <div className='flex flex-col gap-y-6 xs:max-w-full sm:max-w-[55%] w-full relative z-10'>
          <h2
            data-aos='fade-left'
            className='xs:text-[3rem] xs:leading-[3.75rem] md:text-[4rem] md:leading-[4.75rem] font-normal uppercase text-yellow'
          >
            DOMOKUN MINI APP
          </h2>
          <Button
            text='TO OUR TG BOT'
            variant='secondary'
            link={true}
            linkPath='https://t.me/sol_domo_bot'
          />
          <p
            data-aos='fade-left'
            className='text-2xl leading-7 text-gray font-normal'
          >
            Introducing a brown (no woof) gaming universe on the SOLANA
            platform. Every action can bring you real financial benefits, not
            just numbers on a picture.
          </p>
          <p
            data-aos='fade-left'
            className='text-2xl leading-7 text-gray font-normal'
          >
            Game rewards received can be exchanged for SOL or other ecosystem
            tokens.
          </p>
          <p
            data-aos='fade-left'
            className='text-2xl leading-7 text-gray font-normal'
          >
            {' '}
            All participants have access to:
          </p>
          <ul className='pl-5' data-aos='fade-left'>
            <li className='text-2xl leading-7 text-gray font-normal'>
              ● regular tournaments;{' '}
            </li>
            <li className='text-2xl leading-7 text-gray font-normal'>
              ● contests;
            </li>
            <li className='text-2xl leading-7 text-gray font-normal'>
              ● valuable prizes (more expensive than a candy bar).
            </li>
          </ul>
          <p
            data-aos='fade-left'
            className='text-2xl leading-7 text-gray font-normal'
          >
            Spoiler: “smart contracts are used in the game, all economic
            operations are automated”.
          </p>
          <p
            data-aos='fade-left'
            className='text-2xl leading-7 text-gray font-normal'
          >
            Every action you take affects the formation of Domo-SOL's value.
            Kind of like you wouldn't expect, right?
          </p>
        </div>
        <div
          data-aos='zoom-in'
          className='flex gap-6 top-0 right-0 xs:max-w-full sm:max-w-[50%] w-full sm:absolute  items-center'
        >
          <img src='./phone.png' className='w-full' alt='phone' />
        </div>
      </div>
    </div>
  );
};

export default Docs;
