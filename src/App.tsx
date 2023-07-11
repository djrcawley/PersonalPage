import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-shadow-blue">
      <div className='flex flex-col justify-center items-center flex-1'>
        <span className="text-[#D9D9D9] text-2xl font-jost font-bold mb-1">Hello, my name is</span>
        <div className='h-1 w-64 bg-[#BFBFBF] mb-1.5'></div>
        <span className="text-white md:text-7xl text-6xl font-jost font-bold mb-1.5 text-center">Dennis Cawley</span>
        <span className="text-[#D9D9D9] text-2xl font-jost font-bold">Software Engineer</span>
      </div>
      <div className="flex flex-row items-center justify-center w-screen h-20">
        <a href='https://github.com/djrcawley' target="_blank" rel="noopener noreferrer" className='group rounded-full hover:bg-gray-400 mx-12 md:mx-16 w-14 h-14 p-2 flex items-center justify-center'><BsGithub className='text-white group-hover:text-gray-800 text-4xl' /></a>
        <a href='https://www.linkedin.com/in/dennis-cawley/' target="_blank" rel="noopener noreferrer" className='group rounded-full mx-12 md:mx-16 hover:bg-gray-400 w-14 h-14 p-3 flex items-center justify-center'><BsLinkedin className='text-white group-hover:text-gray-800 text-4xl' /></a>
        <a href='https://www.instagram.com/djrcawley/' target="_blank" rel="noopener noreferrer" className='group rounded-full mx-12 md:mx-16 hover:bg-gray-400 w-14 h-14 p-3 flex items-center justify-center'><BsInstagram className='text-white group-hover:text-gray-800 text-4xl' /></a>
      </div>
    </main>

  );
}

export default App;
