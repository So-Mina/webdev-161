import React from 'react'
import Container from '../Container/Container'
import Card from '../Card/Card'
import ReactPlayer from 'react-player'
import ShowMeTheCode from '../ShowMeTheCode/ShowMeTheCode'
import someDucks from './ducks.json'

const DayOne = () => {
  /**
   * This stateless component is returning:
   * - A Container component which is a simple flexbox with some default CSS
   * - A Card Component (children of the Container) which receive
   *  some duckling as props
   * - A ReactPlayer Component coming from an external package.
   */
  return (
    <>
      <ShowMeTheCode components={['Container', 'Card']} />

      <Container gap="4rem" background="hsla(0, 50%, 75%, 1)">
        {someDucks.map((duckling) => {
          return <Card name={duckling.name} picture={duckling.image} />
        })}
      </Container>
      <ReactPlayer
        width={'100%'}
        controls={true}
        url={'https://vimeo.com/375468729'}
      />
    </>
  )
}

export default DayOne
