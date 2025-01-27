import React from 'react'

const ConnectButton = ({
    title
}: {
    title: string;
}) => {
  return (
    <button className="border w-full border-red-600 group cursor-pointer relative rounded-full p-px text-xs font-semibold leading-6 md:mt-10 text-white inline-block">
  <div className="relative text-black-100 flex space-x-2 items-center z-10 rounded-full bg-transparent py-0.5 px-4">
    <span className='text-black-100 px-7'>{title}</span>
    <svg
      fill="black"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
</button>

  )
}

export default ConnectButton