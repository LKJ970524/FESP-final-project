import React, { Suspense } from 'react'
import {
  CommonFooter,
  CommonHeader,
  Spinner,
  CommonTopButton
} from '@components'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { isProduction } from '@utils'
import { getMainData } from '@main'

// React.lazy 함수는 동적으로 컴포넌트를 로드하기 위해 사용됩니다.
const MainThumbnail = React.lazy(() =>
  import('@components/main/MainThumbnail').then(module => ({
    default: module.MainThumbnail
  }))
)
const MainContent = React.lazy(() =>
  import('@components/main/MainContent').then(module => ({
    default: module.MainContent
  }))
)

export const MainPage = () => {
  const { data: mainQuery } = useQuery({
    queryKey: ['mainPage-data'],
    queryFn: getMainData
  })

  // Suspense 컴포넌트는 fallback prop을 통해 로딩 중에 표시할 대체 콘텐츠를 설정합니다. 이 경우, fallback으로는 Spinner 컴포넌트를 설정했습니다.
  return (
    <Suspense fallback={<Spinner />}>
      <>
        <CommonHeader />
        <MainThumbnail
          preLoadData={isProduction ? mainQuery.items : useLoaderData()}
        />
        <MainContent
          preLoadData={isProduction ? mainQuery.items : useLoaderData()}
        />
        <CommonFooter />
        <CommonTopButton />
      </>
    </Suspense>
  )
}
