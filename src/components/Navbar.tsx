import React from 'react'
import logo from '../assets/graphics/logo192.png'
import { getElementSiblings } from '../helper/getElementSiblings'
import { navItems } from '../constants/NavItems'


const onNavItemClick = (e: React.SyntheticEvent<EventTarget>): void => {
    let currentTarget = e.currentTarget as HTMLElement
    currentTarget.classList.add('active')

    let siblings: Node[] = getElementSiblings(currentTarget)
    siblings.forEach((el) => {
        (el as HTMLElement).classList.remove('active')
    })

    let navPath = currentTarget.getAttribute('nav-path')
    console.log(navPath);

}

const renderNavbar = navItems.map(item => {
    return (
        <div
            className="nav-item"
            nav-path={item.path}
            onClick={onNavItemClick}>
            <span className="nav-icon">
                <i className={item.icon}></i>
            </span>
            {item.name}
        </div>
    )
})

const Brand: React.FC = () => {
    return (<div className="brand">
        <img src={logo} alt="App logo" className="App-logo" />
    </div>)
}



const Navbar: React.FC = ({ children }) => {
    return (
        <div className="navbar">
            <Brand />

            {renderNavbar}
        </div>
    )
}

export default Navbar
