import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

function App() {
  return (
      <main className="flex flex-col items-center justify-center h-screen bg-shadow-blue">
        <div className='flex items-center h-screen'>
          <span className="text-white text-5xl font-roboto font-semibold">Dennis Cawley</span>
        </div>
        <div className="flex flex-row justify-center w-screen h-12 ">
          <BsGithub size="25" className='mx-16'/>
          <BsLinkedin  size="25" className='mx-16'/>
          <BsInstagram  size="25" className='mx-16'/>
        </div>
      </main>
    
  );
}

export default App;
