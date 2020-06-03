import React from 'react'
// import Main from './main'
import { useParams, Link } from 'react-router-dom'

const Replist = ({ repos }) => {
  const { userName } = useParams()

  return (
    <div className="mb-4">
      <div className="px-22 mt-4 mb-2 ml-10 mr-10">
        {repos.length === 0 && <div className="bg-blue-500 h-16 rounded-lg border shadow-lg px-4 border-teal-500 text-white py-5 px-2"> No User Exists </div>}
        {repos.map((rep) => {
          return (
            <div className="bg-blue-500 h-16 rounded-lg border shadow-lg px-4">
              <div className="border-teal-500 text-white py-5">
                <div className="px-2">
                  <Link to={`/${userName}/${rep.name}`}> {rep.name} </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
// h-screen
Replist.propTypes = {}

export default Replist
