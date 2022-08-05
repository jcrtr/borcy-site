import Image from 'next/image'
import Logo from '../public/logo.png'

const IndexPage = () => (
    <>
        <div className="h-[400px] flex flex-wrap items-center justify-center">
            <h1 className={'font-bold text-white text-4xl w-full py-2 text-center'}>Команда КВН</h1>
            <h1 className={'font-bold text-white text-5xl lg:w-1/4 py-2 lg:text-right'}>БОРЦЫ</h1>
            <div className={'lg:w-1/4 flex justify-center'}>
                <Image src={Logo}/>
            </div>
            <h1 className={'font-bold text-white text-5xl lg:w-1/4 py-2 lg:text-left'}>СЕРСЕНЫЙ ДЕСАНТ</h1>
        </div>
        <div className={'flex flex-wrap items-center justify-center text-center px-8'}>
            <h2 className={'font-bold text-white text-4xl w-full py-12'}>Короче, концерты</h2>
            <div className={'grid lg:grid-cols-3 gap-12'}>
                <img className={'rounded-lg transform transition duration-500 hover:scale-110'}
                     src={`${process.env.NEXT_PUBLIC}/6_VLADIKAVKAZ.jpg`}
                     width={'400px'}
                     height={'100%'}
                     alt={''}/>
                <img className={'rounded-lg transform transition duration-500 hover:scale-110'}
                     src={`${process.env.NEXT_PUBLIC}/7_NALCHIK.jpg`}
                     width={'400px'}
                     height={'100%'}
                     alt={''}/>
                <img className={'rounded-lg transform transition duration-500 hover:scale-110'}
                     src={`${process.env.NEXT_PUBLIC}/9_KRASNODAR.jpg`}
                     width={'400px'}
                     height={'100%'}
                     alt={''}/>
            </div>
        </div>
        {/*<button type="button"*/}
        {/*        className="tc-background-tomato"*/}
        {/*        data-tc-event="62e3a1786ebe72fae51869e9"*/}
        {/*        data-tc-token={process.env.API_TICKET}>*/}
        {/*    Купить билет*/}
        {/*</button>*/}
    </>

)

export default IndexPage
