import {Tours} from "../../interfaces";
import { sampleUserData } from '../../utils/sample-data'
import {GetStaticPaths, GetStaticProps} from "next";

type Props = {
  item?: Tours
  errors?: string
}


const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
    )
  }
  return (
      <>
        <p> {item.id}</p>
      </>
  )
}


export default StaticPropsDetail


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleUserData.map((tour) => ({
    params: { url: tour.url.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const url = params?.url
    const item = sampleUserData.find((data) => data.url === url)
    return { props: { item } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}
