import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'

const Main = () => {
  const [userName, setUserName] = React.useState('')

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-blue-500 text-white font-bold rounded-lg border shadow-lg p-10">
        <input
          id="input-field"
          type="text"
          className="rounded-lg solid-1g text-black p-2 px-4"
          placeholder="Username"
          value={userName}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              history.push(`/${userName}`)
            }
          }}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
        <button id="search-button" type="button" className="rounded-lg solid-1g p-1 m-1 text-white bg-blue-600 p-2 px-4" onClick>
          <Link to={`/${userName}`}> Search </Link>
        </button>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
