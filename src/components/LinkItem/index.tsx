import type React from 'react';

type LinkItemProps = {
  icon: React.ReactNode;
  name: string;
  url: string;
};

export function LinkItem({ icon, name, url }: LinkItemProps) {
  return (
    <button className='w-64 h-12 text-white bg-emerald-700 rounded-lg'>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center gap-2'
      >
        {icon}
        <span className='flex items-center'>{name}</span>
      </a>
    </button>
  );
}
