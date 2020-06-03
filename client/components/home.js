import React from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import Replist from './replist'
import Reptext from './reptext'
import Main from './main'

const Home = () => {
  const { userName, repositoryName } = useParams()

  const [repos, setRepos] = React.useState([])
  const [user, setUser] = React.useState([])

  React.useEffect(() => {
    if (userName) {
      axios.get(`https://api.github.com/users/${userName}`).then((it) => {
        setUser(it.data)
        console.log(it.data)
      })
    }
  }, [userName])
  
  React.useEffect(() => {
    if (userName) {
      axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
        setRepos(it.data)
        console.log(it.data)
      })
    }
  }, [userName])

  const [repository, setRepository] = React.useState('')

  React.useEffect(() => {
    if (userName && repositoryName) {
      axios.get(`https://api.github.com/repos/${userName}/${repositoryName}/readme`).then((it) => {
        const { content } = it.data
        const decodedContent = atob(content)
        setRepository(decodedContent)
      })
    }
  }, [userName, repositoryName])

  return (
    <div>
      <Header repos={user} />
      <div>
        <div>
          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/:userName" component={() => <Replist repos={repos} />} />
          <Route exact path="/:userName/:repositoryName" component={() => <Reptext repository={repository} />} />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
