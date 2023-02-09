import React from 'react'

const Navbar = () => {
    let mystyle2={
        backgroundColor:'black',
        color:'white'
      
    }
  return (
    
        <nav classNameName="navbar bg-body-tertiary" style={mystyle2}>
  <div className="container-fluid">
    <a className="navbar-brand"></a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    
  </div>
  
</nav>

  )
}

export default Navbar
