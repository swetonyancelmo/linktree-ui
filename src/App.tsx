import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Container } from './components/Container';
import { LinkItem } from './components/LinkItem';
import { Presentation } from './components/ Presentation';

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-12 mt-9 mb-9'>
        <Container>
          <Presentation
            name='Swetony Ancelmo'
            profession='Software Developer'
            imgUrl='/image-me.jpeg'
          />
        </Container>

        <Container>
          <LinkItem
            icon={<FaGithub className='text-lg' />}
            name='GitHub'
            url='https://github.com/swetonyancelmo'
          />
          <LinkItem
            icon={<FaLinkedin className='text-lg' />}
            name='LinkedIn'
            url='https://www.linkedin.com/in/swetony-ancelmo/'
          />
          <LinkItem
            icon={<FaInstagram className='text-lg' />}
            name='Instagram'
            url='https://www.instagram.com/swetony_/'
          />
        </Container>
      </div>
    </>
  );
}

export default App;
