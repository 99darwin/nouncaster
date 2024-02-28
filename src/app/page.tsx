import Image from 'next/image';

export default function Page() {
  return(
    <>
      <div className="h-screen flex items-center justify-center">
        <Image 
          src="/images/soon.png" 
          alt="coming soon" 
          objectFit="cover" 
          width={1028}
          height={357}
          className='max-w-1028px max-h-357px m-4 p-4'
        />
      </div>
    </>
  )
}