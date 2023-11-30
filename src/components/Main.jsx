import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, 
    FaFacebook,
    FaInstagram,
    FaLinkedin} from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img src="https://images.pexels.com/photos/6702448/pexels-photo-6702448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="/" className='w-full h-screen object-cover object-left scale-x-[-1]' />
            <div className='w-full h-screen absolute top-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>
                        Hi,its me Imam Hidayat
                    </h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        I am
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'We produce food for Mice',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'We produce food for Hamsters',
                                1000,
                                'We produce food for Guinea Pigs',
                                1000,
                                'We produce food for Chinchillas',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: "1em", paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                    <a href="https://www.facebook.com/why.mamz/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="cursor-pointer" size={20} />
                        </a>
                    <a href="https://www.instagram.com/imam_segara/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="cursor-pointer" size={20} />
                        </a>
                    <a href="https://www.linkedin.com/in/imam-hidayat-7b59a422b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="cursor-pointer" size={20} />
    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main