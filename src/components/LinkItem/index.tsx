import type React from 'react';

type LinkItemProps = {
  icon: React.ReactNode;
  name: string;
  url: string;
};

export function LinkItem({ icon, name, url }: LinkItemProps) {
  return (
    <button className='w-64 h-12 text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]'>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center gap-2'
      >
        {icon}
        <span className='flex items-center text-base'>{name}</span>
      </a>
    </button>
  );
}
