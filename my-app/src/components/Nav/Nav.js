import './Nav.css'
const Nav = () => {
  const date = new Date(); // create new Date object
  const dateWithoutSeconds = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) // gets rid of seconds in date (original format: 06:05:45 PM -> 06:05 PM)
  const dateInWords = date.toLocaleDateString([], {year: 'numeric', month: 'long', day: 'numeric'}) // gets the date in words

  return (
    <div id='nav'>
      <h1>🍳Welcome, Hannah!</h1>

      <div className='nav-right-side'>
        <h2 className='nav-date-time'>{dateWithoutSeconds} | {dateInWords}</h2>

        <div className='profile'>
          <h3>Hannah Li</h3>
          <img className='profile-image' src='https://images.unsplash.com/photo-1524650359799-842906ca1c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Nav;

// welcome message
// date
// user name 