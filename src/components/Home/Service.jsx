import { FaHeartbeat, FaEye } from 'react-icons/fa';
import img from '../../../public/images/walter-otto-PT70CT6mATQ-unsplash.jpg'
const Service = () => {
    return (
        <div className="container my-8 w-full mx-auto">
            <div className="text-center ">
                <h3 className="font-semibold text-5xl">WHAT WE DO?</h3>
                <p className="mt-2"><small>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  Aenean massa. Cum sociis natoque penatibus <br /> et magnis dis parturient montes, nascetur ridiculus mus</small></p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <div className='mt-12'>
                        <div>
                            <h3 className='flex items-center text-3xl font-semibold'><FaHeartbeat></FaHeartbeat> <span className='ml-2'>CARDIAC CLINIC</span> </h3>
                        </div>
                        <div className='mt-2'>
                            <p><small>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla <br /> consequat massa quis enim. Donec pede justo, fringilla vel, aliquet.</small></p>
                        </div>
                    </div>
                    <hr className='w-[30%] my-2 ml-8' />
                    <div className='mt-4'>
                        <div>
                            <h3 className='flex items-center text-3xl font-semibold'><FaEye></FaEye> <span className='ml-2'>EYE CARE & SURGERY</span> </h3>
                        </div>
                        <div className='mt-2'>
                            <p><small>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla <br /> consequat massa quis enim. Donec pede justo, fringilla vel, aliquet.</small></p>
                        </div>
                    </div>
                    <hr className='w-[30%] my-2 ml-8' />
                </div>
                <div>
                    <img className='w-[200px] h-[200px]' src={img} alt="" />
                </div>
                <div>
                    <div className='mt-12'>
                        <div>
                            <h3 className='flex items-center text-3xl font-semibold'><FaHeartbeat></FaHeartbeat> <span className='ml-2'>CARDIAC CLINIC</span> </h3>
                        </div>
                        <div className='mt-2'>
                            <p><small>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla <br /> consequat massa quis enim. Donec pede justo, fringilla vel, aliquet.</small></p>
                        </div>
                    </div>
                    <hr className='w-[30%] my-2 ml-8' />
                    <div className='mt-4'>
                        <div>
                            <h3 className='flex items-center text-3xl font-semibold'><FaEye></FaEye> <span className='ml-2'>EYE CARE & SURGERY</span> </h3>
                        </div>
                        <div className='mt-2'>
                            <p><small>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla <br /> consequat massa quis enim. Donec pede justo, fringilla vel, aliquet.</small></p>
                        </div>
                    </div>
                    <hr className='w-[30%] my-2 ml-8' />
                </div>
            </div>
        </div>
    );
};

export default Service;