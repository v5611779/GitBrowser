import React from 'react'
import { useParams, Link } from 'react-router-dom'
// import { history } from '../redux'

const Header = ({ repos }) => {
  // const [toggled, toggle] = useState(false)
  const { userName, repositoryName } = useParams()

  if (repositoryName) return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6 text-white font-bold">
      <div id="repository-name" className="px-5">
        <img src={repos.avatar_url} className="inline-block h-10 w-10 rounded-full text-white shadow-solid mr-2" alt="" />
        {userName}/{repositoryName}
      </div>
      <div>
        <button id="go-back" type="button" className="rounded-lg p-1 m-1 text-white bg-blue-600 p-2 px-4" onClick>
          <Link to='/'> Go home </Link>
        </button>
        <button id="go-repository-list" type="button" className="rounded-lg p-1 m-1 text-white bg-blue-600 p-2 px-4" onClick>
          <Link to={`/${userName}`}> Go repository </Link>
        </button>
      </div>
    </nav>
  )

  if (userName) return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6 text-white font-bold">
      <div id="repository-name" className="px-5">
        <img src={repos.avatar_url} className="inline-block h-10 w-10 rounded-full text-white shadow-solid mr-2" alt="" />
        {userName} {repositoryName}
      </div>
      <div>
        <button id="go-back" type="button" className="rounded-lg p-1 m-1 text-white bg-blue-600 p-2 px-4" onClick>
          <Link to='/'> Go home </Link>
        </button>
      </div>
    </nav>
  )

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6 text-white font-bold">
      <div className="px-5">
          Welcome
      </div>
    </nav>
  )
}

export default React.memo(Header)
// export default withRouter(React.memo((Header)))