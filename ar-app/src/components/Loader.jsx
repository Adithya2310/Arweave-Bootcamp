import { loader } from '../assets';
const Loader = () => {
  return (
    <div className='fixed inset-0 z-10 bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col'>
    <img className='w-[100px] h-[100px]' src={loader} alt="loading" />
    <p className='mt-[20px] font-bold text-[20px] text-white text-center'>Loading Assets <br/> Please wait...</p>
    </div>
  )
}

export default Loader;