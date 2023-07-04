import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { AiOutlineInfoCircle } from "react-icons/ai"

function App() {
  return (
      <main className="flex flex-col items-center justify-center h-screen bg-shadow-blue">
        <div className='flex flex-col items-center justify-center flex-1'>
          <span className="text-white text-5xl font-roboto font-semibold">Dennis Cawley</span>
        </div>
        <div className="flex flex-row items-center justify-center w-screen h-20">
          <BsGithub className='text-white mx-12 md:mx-16 text-2xl md:text-3xl'/>
          <BsLinkedin className='text-white mx-12 md:mx-16 text-2xl md:text-3xl'/>
          <BsInstagram className='text-white mx-12 md:mx-16 text-2xl md:text-3xl'/>
        </div>
      </main>
    
  );
}

export default App;
