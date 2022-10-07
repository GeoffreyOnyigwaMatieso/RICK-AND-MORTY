import React from 'react'

export const Search = () => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Favourite Character"
        onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}



