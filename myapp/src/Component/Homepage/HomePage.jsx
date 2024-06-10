import React from 'react'
import Header from '../Header/Header'
import Container from '../Books/Container'

const HomePage = ({query,setQuery,addToCart}) => {
  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <Container
        query={query}
        setQuery={setQuery}
        addToCart={ addToCart}
      /> 
    </div>
  )
}

export default HomePage
