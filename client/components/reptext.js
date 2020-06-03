import React from 'react'
import Markdown from 'markdown-to-jsx'

const Reptext = (props) => {
  
  return (
    <div id="description" className="mb-8">
      <div className="px-22 mt-4 mb-8 ml-10 mr-10">
        <div className="rounded-lg border shadow-lg py-6 bg-blue-500 text-white px-6">
          Readme
          <Markdown>{props.repository}</Markdown>
        </div>
      </div>
    </div>
  )
}

Reptext.propTypes = {}

export default Reptext
