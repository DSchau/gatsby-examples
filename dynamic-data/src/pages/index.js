import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class IndexPage extends Component {
  state = {
    jokes: [],
    status: ''
  }

  async componentDidMount() {
    this.setState({
      status: `loading`
    })
  
    const jokes = await fetch(`${process.env.GATSBY_API_URL}/random_ten`)
      .then(response => response.json())

    this.setState({
      jokes,
      status: `complete`
    })
  }

  render() {
    const { jokes, status } = this.state
    return (
      <Layout>
        <h1>Ten Random Jokes</h1>
        {status === `loading` && <p>Loading&hellip;</p>}
        {
          jokes.length > 0 && (
            <ul>
              {
                jokes.map((joke, index) => {
                  const jokeText = `${joke.setup} - ${joke.punchline}`
                  return (
                    <li key={`${joke.id}-${index}`}>
                      <Link to={`/jokes/${joke.id}`} state={{
                        jokeText
                      }}>
                        {jokeText}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          )
        }
    </Layout>
    )
  }
}

export default IndexPage
