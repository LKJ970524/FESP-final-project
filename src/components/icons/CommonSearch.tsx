import React from 'react'
import styled, { useTheme } from 'styled-components'

const StyledSearch = styled.svg`
  width: 30px;
  height: 30px;
`

export const CommonSearch = () => {
  const theme = useTheme()

  // Define colors for light and dark themes
  const lightColor = 'white'
  const darkColor = 'black'

  // Determine the fill and stroke colors based on the current theme
  const fillColor = theme.theme === 'light' ? lightColor : darkColor
  const strokeColor = theme.theme === 'light' ? lightColor : darkColor

  return (
    <StyledSearch
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M0 0h24v24H0z"
        fill="none"
      />
      <path
        d="M11.046 4C12.9141 4.00212 14.705 4.74514 16.0259 6.06606C17.3469 7.38699 18.0899 9.17793 18.092 11.046C18.0939 12.6903 17.5181 14.2831 16.465 15.546L19.809 18.89C19.931 19.012 19.9995 19.1775 19.9995 19.35C19.9995 19.5225 19.931 19.688 19.809 19.81C19.687 19.932 19.5215 20.0005 19.349 20.0005C19.1765 20.0005 19.011 19.932 18.889 19.81V19.81L15.545 16.465C14.2824 17.5178 12.69 18.0937 11.046 18.092C9.17793 18.0899 7.38699 17.3469 6.06606 16.0259C4.74514 14.705 4.00212 12.9141 4 11.046C4.00212 9.17793 4.74514 7.38699 6.06606 6.06606C7.38699 4.74514 9.17793 4.00212 11.046 4ZM11.046 5.3C9.52273 5.30185 8.06239 5.90786 6.98536 6.98507C5.90834 8.06228 5.30259 9.52273 5.301 11.046C5.30285 12.5691 5.90872 14.0293 6.98572 15.1063C8.06271 16.1833 9.5229 16.7891 11.046 16.791C12.5691 16.7891 14.0293 16.1833 15.1063 15.1063C16.1833 14.0293 16.7891 12.5691 16.791 11.046C16.7891 9.5229 16.1833 8.06271 15.1063 6.98572C14.0293 5.90872 12.5691 5.30285 11.046 5.301V5.3Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </StyledSearch>
  )
}
