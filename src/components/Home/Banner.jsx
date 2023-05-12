import img1 from '../../../public/images/piron-guillaume-U4FyCp3-KzY-unsplash.jpg';


const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h4 className='text-yellow-400'>Medical Health</h4>
                        <h1 className="mb-5 text-5xl font-bold"> <span className='text-orange-600'>Best</span> Choice For Medical Health Care</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;