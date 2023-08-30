import { styled } from 'styled-components'
import backgroundImage from '@/assets/background.svg'
import { defaultTheme } from '@/styles/themes/default'

export const IntroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  height: 34rem;
  padding: 0 10rem;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${backgroundImage});

  box-shadow:
    0px -30px 30px -20px ${defaultTheme.background} inset,
    0px 30px 30px -20px ${defaultTheme.background} inset;

  @media (max-width: 768px) {
    padding: 2rem;

    img {
      height: 20rem;
      margin-top: 4.125rem;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 36.75rem;
  margin-bottom: 4.125rem;

  p {
    font-family: 'Baloo 2', cursive;
    font-size: 48px;
  }

  @media (max-width: 768px) {
    width: 29rem;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`

export const ItemContainer = styled.div`
  width: 18rem;
  margin-bottom: 1.25rem;
`

export const ItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.75rem;

  padding: 0.5rem;
  border-radius: 50%;
`
