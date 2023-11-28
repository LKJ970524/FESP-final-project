import { ContentWrap, ListTitle } from '@styles'
import { VideoItem } from '@types'
import { ContentCard } from './ContentCard'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

export const MainContent = ({ preLoadData }: { preLoadData: VideoItem[] }) => {
  return (
    <>
      <ListTitle>Most Popular</ListTitle>
      <LazyLoadComponent>
        <ContentWrap>
          {preLoadData &&
            preLoadData?.map((data: VideoItem) => (
              <li key={data.id}>
                <ContentCard data={data} />
              </li>
            ))}
        </ContentWrap>
      </LazyLoadComponent>
    </>
  )
}
