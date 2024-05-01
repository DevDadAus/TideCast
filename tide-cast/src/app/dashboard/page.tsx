import { lusitana } from '@/app/dashboard/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div>
        <Image 
          src={"/desktop-hero.jpeg"}
          width={1024}
          height={760}
          className='hidden md:block'
          alt='Desktop hero image'
        />
        <Image 
          src={"/mobile-hero.jpeg"}
          width={560}
          height={620}
          className='block md:hidden'
          alt='mobile hero image'
        />
      </div>
    </>
  )
}