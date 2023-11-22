/* eslint-disable react/prop-types */
import { VideoItem } from '@types'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CommonPlayLogo } from '@components/common'
import { useNavigate } from 'react-router-dom'

interface Slide {
  $image?: string
  $height?: number
}

const getRandomItems = (array: any[], count: number) => {
  return array.sort(() => 0.5 - Math.random()).slice(0, count)
}

export const MainThumbnail = ({
  preLoadData
}: {
  preLoadData: VideoItem[]
}) => {
  const navigate = useNavigate()

  const randomItems = getRandomItems(preLoadData, 5)

  const handlePlayButtonClick = (id: string) => {
    navigate(`/detail/${id}`)
  }

  const CustomPrev: React.FC<
    React.HTMLAttributes<HTMLButtonElement>
  > = props => <Prev onClick={props.onClick}>{'<'} </Prev>

  const CustomNext: React.FC<
    React.HTMLAttributes<HTMLButtonElement>
  > = props => <Next onClick={props.onClick}>{'>'} </Next>

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />
  }

  return (
    <Wrap>
      <Slider {...settings}>
        {randomItems &&
          randomItems.map((item, index) => (
            <div key={index}>
              <ThumbnailBoxImg
                $height={item.snippet.thumbnails.maxres.height / 1.5}
                $image={item.snippet.thumbnails.maxres.url}>
                <PlayBtnBox onClick={() => handlePlayButtonClick(item.id)}>
                  <CommonPlayLogo />
                  <PlayBtnText>Play Now</PlayBtnText>
                </PlayBtnBox>
              </ThumbnailBoxImg>
            </div>
          ))}
        <CustomPrev />
      </Slider>
    </Wrap>
  )
}
const Wrap = styled.div`
  margin: 0 auto;
  max-width: calc(100% -100px);
`

const ThumbnailBoxImg = styled.div<Slide>`
  position: relative;
  height: ${props => props.$height}px;
  border-radius: 8px;
  width: calc(100% - 100px);
  margin: 0 auto;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.$image})`};
`

const PlayBtnBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 20px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  width: 191px;
  height: 66px;
  position: absolute;
  bottom: 16%;
  left: 8%;

  cursor: pointer;
`

const PlayBtnText = styled.div`
  display: flex;
  color: ${props => props.theme.main.ft_color_w};
  font-size: 20px;
`

const Prev = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  z-index: 10;
  color: red;
  background-color: ${props => props.theme.main.ft_color_w};
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
`

const Next = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 1;
  color: red;
  background-color: ${props => props.theme.main.ft_color_w};
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
`
