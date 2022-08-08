import {Tours} from "../interfaces";
import {sampleUserData} from '../utils/sample-data'
import {GetStaticPaths, GetStaticProps} from "next";

type Props = {
    item?: Tours
    errors?: string
}

import dynamic from "next/dynamic";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {ssr: false});

const StaticPropsDetail = ({item, errors}: Props) => {
    const {id, url, name, video} = item
    // if (errors) {
    //   return (
    //       <p>
    //         <span style={{ color: 'red' }}>Error:</span> {errors}
    //       </p>
    //   )
    // }

    return (
        <>
            <div className={'min-h-screen bg-radial-at-t from-gray-700 via-gray-900 to-gray-900 flex flex-col items-center justify-start'}>
                <Link href={'/'}>
                <div className="h-[200px] lg:max-w-screen-xl flex flex-wrap items-center justify-center mb-12">
                    <div className={'flex justify-center'}>
                        <Image src={`/logo.png`} width={'120px'} height={'120px'}/>
                    </div>
                    <div className={'lg:px-12 ml-4'}>
                        <h1 className={'font-bold text-white text-4xl py-2 text-center lg:text-left'}>БОРЦЫ</h1>
                    </div>
                </div></Link>
                <h1 className={'font-bold text-white text-4xl py-2 text-center lg:mb-12'}>{name}</h1>
                {/*<div className={'lg:py-12 w-[380px] lg:w-1/3'}>*/}
                {/*<div className={'player-wrapper'}>*/}
                <ReactPlayer url={video}
                             className="lg:mb-12"
                    // playing
                             playing={true}
                             controls={false}
                             width="100%"
                    // height="100%"
                />
                {/*</div>*/}

                {/*</div>*/}
                <button type="button"
                        className="tc-background-tomato"
                        data-tc-event={id}
                        data-tc-token={process.env.API_TICKET}>
                    Купить билет
                </button>
            </div>
        </>
    )
}


export default StaticPropsDetail


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = sampleUserData.map((tour) => ({
        params: {url: tour.url.toString()},
    }))

    return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {url} = params;
    const item = sampleUserData.find((data) => data.url === url)
    return {props: {item}}
}