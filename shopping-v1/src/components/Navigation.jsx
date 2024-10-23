import "../Assets/CSS/navigation.css"
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <div class="navigation">
        
    <ul>
    <li><Link to ='/'>Home</Link></li>
    <li><Link to='/news'>News</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/products'>Products</Link></li>
    <li><Link to='/counter'>Counter App</Link></li>
    <li><Link to='/random'>Random User Me API</Link></li>
  </ul>
  
  </div>
    </div>
  )
}

export default Navigation