import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Section from './components/Section'
import SideMenu from './components/SideMenu'
import data from './data'

function App() {
  return (
    <>
      <Section
        title={data[0].title}
        description={data[0].description}
        variant="blue"
      />
      <Section
        title={data[1].title}
        description={data[1].description}
        variant="beige"
      />
      <Section
        title={data[2].title}
        description={data[2].description}
        variant="blue"
      />
      <Section
        title={data[3].title}
        description={data[3].description}
        variant="white"
      />
      <Section
        variant="black"
        title={data[4].title}
        description={data[4].description}
      />
      <SideMenu />
      <GlobalStyles />
    </>
  )
}

export default App
