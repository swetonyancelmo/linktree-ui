import type React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className='max-w-5xl'>
      <div className='flex flex-col items-center justify-center gap-4'>
        {children}
      </div>
    </div>
  );
}
