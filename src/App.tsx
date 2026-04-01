import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LinkItem } from './components/LinkItem';
import { Presentation } from './components/Presentation';

function App() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-12 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <div className='w-full max-w-md text-gray-200 bg-gray-800/80 backdrop-blur-md shadow-md rounded-2xl p-8 flex flex-col items-center gap-10'>
        <Presentation
          name='Swetony Ancelmo'
          profession='Software Developer'
          imgUrl='/image-me.jpeg'
        />

        <div className='flex flex-col items-center gap-4 w-full'>
          <LinkItem
            icon={<FaGithub className='text-xl shrink-0' />}
            name='GitHub'
            url='https://github.com/swetonyancelmo'
          />
          <LinkItem
            icon={<FaLinkedin className='text-xl shrink-0' />}
            name='LinkedIn'
            url='https://www.linkedin.com/in/swetony-ancelmo/'
          />
          <LinkItem
            icon={<FaInstagram className='text-xl shrink-0' />}
            name='Instagram'
            url='https://www.instagram.com/swetonydev/'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
