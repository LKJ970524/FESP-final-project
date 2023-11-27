import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router-dom'
import { Spinner } from '@components'

const DetailMainContent = React.lazy(() =>
  import('@components/detail/DetailMainContent').then(module => ({
    default: module.DetailMainContent
  }))
)

const DetailRelatedList = React.lazy(() =>
  import('@components/detail/DetailRelatedList').then(module => ({
    default: module.DetailRelatedList
  }))
)

const CommentsBox = React.lazy(() =>
  import('@components/detail/CommentsBox').then(module => ({
    default: module.CommentsBox
  }))
)

const CommonHeader = React.lazy(() =>
  import('@components/common/CommonHeader').then(module => ({
    default: module.CommonHeader
  }))
)

const CommonFooter = React.lazy(() =>
  import('@components/common/CommonFooter').then(module => ({
    default: module.CommonFooter
  }))
)

const CommonTopButton = React.lazy(() =>
  import('@components/common/CommonTopButton').then(module => ({
    default: module.CommonTopButton
  }))
)

export const DetailPage = () => {
  const param = useParams()
  const id: string = param.id as string
  const preLoadData: any = useLoaderData()

  const { state } = useLocation()
  const [detailData, setDetailData] = useState(null)
  const [relatedData, setRelatedData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const filteredData = state
        ? state
        : preLoadData.find(item => item.id === id)
      setDetailData(filteredData)

      const relatedJson = await fetch(
        `/videos/searchByChannels/search-by-channel-id-${filteredData?.snippet.channelId}.json`
      ).then(res => res.json())
      setRelatedData(relatedJson.items)
    }
    fetchData()
  }, [id])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  return (
    <Suspense fallback={<Spinner />}>
      <>
        <CommonHeader />
        <DetailMainContent
          detailData={detailData}
          id={id}
        />
        <DetailRelatedList relatedData={relatedData} />
        <CommentsBox videoId={id} />
        <CommonFooter />
        <CommonTopButton />
      </>
    </Suspense>
  )
}
