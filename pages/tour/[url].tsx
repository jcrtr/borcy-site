import {Tours} from "../../interfaces";
import {sampleUserData} from '../../utils/sample-data'
import {GetStaticPaths, GetStaticProps} from "next";

type Props = {
    item?: Tours
    errors?: string
}

import dynamic from "next/dynamic";

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
            <div className={'min-h-screen bg-gray-900 py-12 flex flex-col items-center justify-center'}>
                <h1 className={'font-bold text-white text-2xl py-2 text-center'}>{name}</h1>
                <div className={'py-12'}>
                    <ReactPlayer url={video}
                                 playing={true}
                                 controls
                    />
                </div>

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
