import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-shadow-blue">
      <div className='flex flex-col items-center justify-center flex-1'>
        <span className="text-white text-6xl font-jost font-bold">Dennis Cawley</span>
      </div>
      <div className="flex flex-row items-center justify-center w-screen h-20">
        <a href='https://github.com/djrcawley' target="_blank" rel="noopener noreferrer" className='rounded-full mx-12 md:mx-16 hover:bg-gray-400 w-14 h-14 p-2 flex items-center justify-center'><BsGithub className='text-white text-4xl' /></a>
        <a href='https://www.linkedin.com/in/dennis-cawley/' target="_blank" rel="noopener noreferrer" className='rounded-full mx-12 md:mx-16 hover:bg-gray-400 w-14 h-14 p-3 flex items-center justify-center'><BsLinkedin className='text-white text-4xl' /></a>
        <a href='https://www.instagram.com/djrcawley/' target="_blank" rel="noopener noreferrer" className='rounded-full mx-12 md:mx-16 hover:bg-gray-400 w-14 h-14 p-3 flex items-center justify-center'><BsInstagram className='text-white text-4xl' /></a>
      </div>
    </main>

  );
}

export default App;
