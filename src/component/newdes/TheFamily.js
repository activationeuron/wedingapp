export default function Family({ imageone, imagetwo }) {
  return (
    <div className='max-w-4xl mx-auto flex md:flex-row flex-col justify-around'>
      <div className='w-full md:w-1/2 relative h-[40rem] hidden lg:block '>
        <div className='md:absolute z-10 -left-10 top-10 h-96  border-t-8 border-l-8 border-purple-800 p-3'>
          <img src={imageone} alt='' className='h-72 w-60 object-cover' />
        </div>
        <div className='absolute top-52 right-10 border-r-8 border-b-8 border-purple-800 p-3'>
          <img src={imagetwo} alt='' className='h-80 w-60 object-cover' />
        </div>
      </div>

      <div className='w-full md:w-1/2'>
        <div className='text-purple-700 font-prim text-2xl text-center py-10 lg:py-0'>
          The Family
        </div>
        <div className='w-full md:w-1/2 relative h-[40rem] lg:hidden'>
          <div className='md:absolute z-10 -left-10 top-10 h-96  border-t-8 border-l-8 border-purple-800 p-3'>
            <img src={imageone} alt='' className='h-72 w-60 object-cover' />
          </div>
          <div className='absolute top-52 right-10 border-r-8 border-b-8 border-purple-800 p-3'>
            <img src={imagetwo} alt='' className='h-80 w-60 object-cover' />
          </div>
        </div>
        <div className='text-purple-900 font-head px-5 mx-auto text-center'>
          It was a crisp autumn morning; the leaves were just beginning to turn
          a burnt orange while the breeze still carried warm sun rays. Afaan
          could feel the adrenaline in the air as he boarded his flight for
          skydiving. Before he knew it, the plane was 14,000 feet in the air,
          the mere ground beneath them a dazzling map of ruby treetops and
          silver streams cutting through the land. The anticipation before the
          jump was electrifying. Afaan began to secure his parachute while
          scanning the passengers when a beautiful desi girl caught his eye.
          Before he could say hello, his name was called for the jump. Checking
          his straps one last time, he made his way to doors open to nothing but
          blue skies and chilled air. The rush of thrill raced through his veins
          as he jumped into nothingness flew through the sky with grace. He
          swirled and flipped a few thousand feet through the refreshing air…
          when all of a sudden he noticed that girl again. Yet she didn’t look
          thrilled, her eyes were in a state of panic, and that’s when he
          realized her parachute was stuck. Afaan flew through the sky and
          locked onto her backpack. She looked up at him with knowing eyes and
          relief. “Nice to meet you. I’m Afaan,” he yelled through the booming
          sound of rushing air. And well, the rest is history.
        </div>
      </div>
    </div>
  );
}
