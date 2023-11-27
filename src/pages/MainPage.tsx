import React from 'react'
import {
  CommonFooter,
  CommonHeader,
  MainContent,
  MainThumbnail,
  Spinner
} from '@components'
import { CommonTopButton } from '@common'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { isProduction } from '@utils'
import { getMainData } from '@main'

export const MainPage = () => {
  const { data: mainQuery, isLoading } = useQuery({
    queryKey: ['mainPage-data'],
    queryFn: getMainData
  })

  if (isLoading) return <Spinner />
  console.log(Spinner)

  const preLoadData = isProduction ? mainQuery.items : useLoaderData()

  return (
    <>
      <CommonHeader />
      <MainThumbnail preLoadData={preLoadData} />
      <MainContent preLoadData={preLoadData} />
      <CommonFooter />
      <CommonTopButton />
    </>
  )
}
