import React from 'react';
import 'tw-elements';

const MenuPage = () => {
  return (
    <div className='overflow-scroll fixed top-20 left-0 pt-10 w-[100%] h-[100%] bg-orange-300'>
      <div className='flex'>
        <h5 className='mx-auto font-serif text-6xl text-white'>M E N U</h5>
      </div>

      <div className='flex overflow-scroll justify-center items-center px-64 pt-1 pb-44 space-x-1 sm:flex-col sm:-space-y-44'>
        <div className='max-w-sm bg-white rounded-lg shadow-lg sm:scale-75'>
          <img className='w-full rounded-t-lg' src='/logo1.png' alt='logo' />
          <div className='p-6'>
            <div className='flex'>
              <h5 className='pb-4 mx-auto font-serif text-4xl font-medium text-gray-900 underline underline-offset-4'>
                C U T
              </h5>
            </div>
            <div className='flex justify-center'>
              <ul className='w-96 text-gray-900 bg-white rounded-lg'>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>レギュラー</p>
                  <p className='px-5 text-xl'>3,800</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>大学生</p>
                  <p className='px-5 text-xl'>3,500</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>高校生</p>
                  <p className='px-5 text-xl'>3,200</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>中学生</p>
                  <p className='px-5 text-xl'>2,800</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>小学生</p>
                  <p className='px-5 text-xl'>2,400</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>乳幼児</p>
                  <p className='px-5 text-xl'>2,400</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='max-w-sm bg-white rounded-lg shadow-lg sm:scale-75'>
          <img className='w-full rounded-t-lg' src='/logo1.png' alt='logo' />
          <div className='p-6'>
            <div className='flex'>
              <h5 className='pb-4 mx-auto font-serif text-4xl font-medium text-gray-900 underline underline-offset-4'>
                C O U R S E
              </h5>
            </div>
            <div className='flex justify-center'>
              <ul className='space-y-10 w-96 text-gray-900 bg-white rounded-lg'>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>レギュラー</p>
                  <p className='px-5 text-xl'>3,800</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>フェイスエステ</p>
                  <p className='px-5 text-xl'>4,800</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>ヘアエステ</p>
                  <p className='px-5 text-xl'>4,800</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>ヘッドスパ</p>
                  <p className='px-5 text-xl'>4,800</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='max-w-sm bg-white rounded-lg shadow-lg sm:scale-75'>
          <img className='w-full rounded-t-lg' src='/logo1.png' alt='logo' />
          <div className='p-6'>
            <div className='flex'>
              <h5 className='pb-4 mx-auto font-serif text-4xl font-medium text-gray-900 underline underline-offset-4'>
                P E R M
              </h5>
            </div>
            <div className='flex justify-center'>
              <ul className='w-96 text-gray-900 bg-white rounded-lg'>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>セクションパーマ</p>
                  <p className='px-5 text-xl'>5,800</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>レギュラーパーマ</p>
                  <p className='px-5 text-xl'>7,000</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>ピンパーマ</p>
                  <p className='px-5 text-xl'>7,500</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>ミックスパーマ</p>
                  <p className='px-5 text-xl'>8,000</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>縮毛矯正</p>
                  <p className='px-5 text-xl'>7,000</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>カラーリング</p>
                  <p className='px-5 text-xl'>6,500</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='max-w-sm bg-white rounded-lg shadow-lg sm:scale-75'>
          <img className='w-full rounded-t-lg' src='/logo1.png' alt='logo' />
          <div className='p-6'>
            <div className='flex'>
              <h5 className='pb-4 mx-auto font-serif text-4xl font-medium text-gray-900 underline underline-offset-4'>
                L A D E S
              </h5>
            </div>
            <div className='flex'>
              <h5 className='pb-4 mx-auto font-serif text-4xl font-medium text-gray-900 underline underline-offset-4'>
                S H A V I N G
              </h5>
            </div>
            <div className='flex justify-center'>
              <ul className='space-y-10 w-96 text-gray-900 bg-white rounded-lg'>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>レギュラー</p>
                  <p className='px-5 text-xl'>2,400</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>フェイスエステ</p>
                  <p className='px-5 text-xl'>3,000</p>
                </li>
                <li className='flex justify-between items-center py-4 px-6 w-full hover:bg-orange-300 rounded-lg border-b border-gray-200'>
                  <p className='px-5 text-xl'>フェイスパック</p>
                  <p className='px-5 text-xl'>3,800</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
