import React from 'react'
import './Header.css'
import clglogo from '../../Assets/clglogo.png'
function Header() {
  return (
    <div>
        <header>
        <div><img class="clglogo" src={clglogo} alt="collegelogo"/></div>
        <div class="clg-name">
        <h2 id="college_name">Alagappa Chettiar Government College of Engineering and Technology,Karaikudi-630003</h2>
        <p class="college_description">(An Autonomous Institution Permanently Affiliated to Anna University)</p>
        </div>
    </header>
    <hr id='header-line'/>
    </div>
  )
}

export default Header