import Image from 'next/image'
import Logo from '../public/logo.png'
import Link from "next/link";

const IndexPage = () => (
    <div className={'min-h-screen bg-gray-900 py-12 flex flex-col items-center justify-center'}>
        <div className="lg:h-[300px] lg:max-w-screen-xl flex flex-wrap items-center justify-center mb-12">
            <div className={'flex justify-center'}>
                <Image src={Logo}/>
            </div>
            <div className={'lg:px-12'}>
                <h1 className={'font-bold text-white text-2xl py-2 text-center lg:text-left lg:mt-0 mt-8'}>Команда
                    КВН</h1>
                <h1 className={'font-bold text-white text-5xl py-2 text-center lg:text-left'}>БОРЦЫ</h1>
                <h1 className={'font-bold text-white text-4xl py-2 text-center lg:text-left'}>СЕРСЕНЫЙ ДЕСАНТ</h1>
            </div>

        </div>
        <div className={'flex flex-wrap items-center justify-center text-center px-8'}>
            {/*<h2 className={'font-bold text-white text-4xl w-full py-12'}>Короче, концерты</h2>*/}
            <div className={'grid lg:grid-cols-3 gap-12'}>
                <Link href={'/tour/vladikavkaz'}>
                    <img className={'rounded-large transform transition duration-500 hover:scale-110'}
                         src={`6_VLADIKAVKAZ.jpg`}
                         width={'400px'}
                         height={'100%'}
                         alt={''}/>
                </Link>
                <Link href={'/tour/nalchik'}>
                    <img className={'rounded-large transform transition duration-500 hover:scale-110'}
                         src={`7_NALCHIK.jpg`}
                         width={'400px'}
                         height={'100%'}
                         alt={''}/>
                </Link>
                <Link href={'/tour/krasnodar'}>
                    <img className={'rounded-large transform transition duration-500 hover:scale-110'}
                         src={`9_KRASNODAR.jpg`}
                         width={'400px'}
                         height={'100%'}
                         alt={''}/>
                </Link>
            </div>
        </div>
    </div>

)

export default IndexPage
