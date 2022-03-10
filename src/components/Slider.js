import React from 'react';

function Slider() {
  return (
    <div>
      <div className='slider__warpper'>
        <div
          className='flex__container flex--pikachu flex--active'
          data-slide='1'
        >
          <div className='flex__item flex__item--left'>
            <div className='flex__content'>
              <p className='font-prim text-2xl'>We Are Getting Married</p>
              <h1 className='font-head text-6xl'>Afaan & Mariam</h1>

              <p className='text-2xl font-prim py-10'>
                something about wedding Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aliquam officia unde quaerat. Nobis dicta
                soluta nostrum vel suscipit neque illum.
              </p>
            </div>
            <p className='text__background'>Afaan & Mariam</p>
          </div>
          <div className='flex__item flex__item--right bg-black'>
            <img
              className='object-cover h-full  opacity-30 '
              src='https://www.brides.com/thmb/dD21mxC_W5j9b1jGVgpNC5JgRbU=/750x0/filters:no_upscale():max_bytes(200000):strip_icc():format(webp)/ariel-and-alissa-wedding29-a1766c0c4c35406381bed3dee27d7e1a.jpeg'
              alt=''
            />
          </div>
          <img
            className='pokemon__img'
            src='https://images.unsplash.com/photo-1627205265923-190841d62452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            alt='tes'
          />
        </div>
        <div
          className='flex__container flex--piplup animate--start'
          data-slide='2'
        >
          <div className='flex__item flex__item--left'>
            <div className='flex__content'>
              <p className='font-prim text-2xl'>The Bride </p>
              <h1 className='font-head text-6xl '>Mariam Hashmi</h1>
              <p className='font-prim text-xl text-cyan-900'>
                Father Hashmi & mother hashmi
              </p>
              <p className='text-2xl font-prim py-10'>
                bride info Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Magnam, nesciunt!
              </p>
            </div>
            <p className='text__background'>Mariam Hashmi</p>
          </div>
          <div className='flex__item flex__item--right bg-black'>
            <img
              className='object-cover h-full  opacity-50 '
              src='https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2020/06/92755403_237695664303166_7976138127103942296_n.jpg'
              alt=''
            />
          </div>
          <img
            className='pokemon__img'
            src='https://i0.wp.com/shaadiwish.com/blog/wp-content/uploads/2019/06/1mahasphotographyofficial-1.jpg'
            alt='testr'
          />
        </div>
        <div
          className='flex__container flex--blaziken animate--start'
          data-slide='3'
        >
          <div className='flex__item flex__item--left'>
            <div className='flex__content'>
              <p className='font-prim text-2xl'>The Groom</p>
              <h1 className='font-head text-6xl'>Afaan Mohammed</h1>
              <p className='font-prim text-xl text-cyan-600 py-2'>
                Father Mohammed & mother Mohammed
              </p>
              <p className='text-2xl font-prim py-10'>
                Blaziken is the Fire/Fighting-type Starter Pokémon of the Hoenn
                region, introduced in Generation III. Blaziken is a large,
                bipedal, humanoid bird-like Pokémon that resembles a rooster.
              </p>
            </div>
            <p className='text__background'>Afaan Mohammed</p>
          </div>
          <div className='flex__item flex__item--right '>
            <img
              className='object-cover h-full  opacity-30  bg-black'
              src='https://www.oyorooms.com/blog/wp-content/uploads/2018/02/shutterstock_1060564139.jpg'
              alt=''
            />
          </div>
          <img
            className='pokemon__img'
            src='https://www.stylesnic.com/wp-content/uploads/2020/07/dark-blue-embroidered-sherwani.jpg'
          />
        </div>
        <div
          className='flex__container flex--dialga animate--start'
          data-slide='4'
        >
          <div className='flex__item flex__item--left'>
            <div className='flex__content'>
              <p className='font-prim text-2xl'>The Families</p>
              <h1 className='font-head text-6xl'>The Famile or the story </h1>
              <p className='text-2xl font-prim py-10'>
                the family Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Aut earum, animi deserunt cum fugiat architecto eveniet
                sapiente accusamus numquam,
              </p>
            </div>
            <p className='text__background'>the Family</p>
          </div>
          <div className='flex__item flex__item--right'></div>
          <img
            className='pokemon__img'
            src='https://cdn0.weddingwire.in/article/3892/3_2/1280/jpg/72983-indian-family-photos-shyamal-bhumika-lead.webp'
          />
        </div>
        <div
          className='flex__container flex--zekrom animate--start'
          data-slide='5'
        >
          <div className='flex__item flex__item--left'>
            <div className='flex__content'>
              <p className='font-prim text-2xl'>You Are Invited</p>
              <h1 className='font-head text-6xl'>RSVP</h1>
            </div>
            <p className='text__background'>Zekrom</p>
          </div>
          <div className='flex__item flex__item--right'></div>
        </div>
      </div>

      <div className='slider__navi'>
        <a href='#' className='slide-nav active' data-slide='1'>
          pikachu
        </a>
        <a href='#' className='slide-nav' data-slide='2'>
          piplup
        </a>
        <a href='#' className='slide-nav' data-slide='3'>
          blaziken
        </a>
        <a href='#' className='slide-nav' data-slide='4'>
          dialga
        </a>
        <a href='#' className='slide-nav' data-slide='5'>
          zekrom
        </a>
      </div>
    </div>
  );
}

export default Slider;
