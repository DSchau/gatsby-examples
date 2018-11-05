import React from 'react'

import Layout from '../components/layout'

/*
 * The Joke API doesn't contain a resource by id request
 * so we'll have to pass it via location state!
 */
function Joke({ location: { state: locationState }}) {
  const { jokeText = `Joke not found` } = locationState;

  return (
    <Layout>
      <div>
        <p>{jokeText}</p>
      </div>
    </Layout>
  )
} 

export default Joke
