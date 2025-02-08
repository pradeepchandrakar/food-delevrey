import useOnlineStatus from "../utils/useOnlinestatus";

function Header(){

  const onlineStatus = useOnlineStatus()
  return(
    <>
   
    <nav className="nav">
      <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" alt=""
      height="100px" width="100px" />
      <ul>
         <li>
          {onlineStatus? "🛜" :"🚫" }
         </li>

        <li>
          <a href="">⌕ search</a>
        </li>
        <li>
          <a href="">🎁 offers</a>
        </li>
        <li>
          <a href="">Help</a>
        </li>
        <li>
          <a href=""> 👤 sing in</a>
        </li>
        <li>
          <a href="">🛒 cart </a>
        </li>
      </ul>
    </nav>
    </>
  )
}
export default Header;