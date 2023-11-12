const Navbar = (props) => {
    return (
      <div className="myNav">
         <nav className= "navbar">
          <ul>
            <li id = "home">
              <a href = "#"> Start </a>
            </li>
            <li id = "about">
              <a href = "#"> Options</a>
            </li>
            <li id ="restart">
              <a href = "#">{props.test}</a>
            </li>
            <li id = "portfolio">
              <a href = "#"> Submit </a>
            </li>
            <li id ="contact">
              <a href = "#"> Contact </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  export default Navbar;

  