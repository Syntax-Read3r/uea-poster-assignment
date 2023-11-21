import React from "react";
import "./Nav.css";
import { FaHome } from "react-icons/fa";
import {FcAbout} from "react-icons/fc";
import {AiFillSafetyCertificate} from "react-icons/ai";
import {MdHomeRepairService} from "react-icons/md";
import {RiCustomerService2Fill} from "react-icons/ri";
import { useState } from "react";
import {Link} from 'react-scroll'

const Nav = () => {


	const [activeNav, switchActiveNav] = useState('false');

	const closeMenu = () => switchActiveNav('false');

		return (
			<nav>
				<Link to="#" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} isDynamic={true} className={activeNav === '#'? 'active' : ''}>
					<FaHome />
				</Link>
				<Link to="#about" spy={true} smooth={true} offset={1} duration={500}onClick={closeMenu} className={activeNav === '#about'? 'active' : ''}>
                    <FcAbout />
                </Link>
				<Link to="#experience" spy={true} smooth={true} offset={1} duration={500} onClick={closeMenu} className={activeNav === '#experience'? 'active' : ''}>
                    <AiFillSafetyCertificate />
                </Link>
				<Link to="#services" spy={true} smooth={true} offset={1} duration={500} onClick={closeMenu} className={activeNav === '#services'? 'active' : ''}>
                    <MdHomeRepairService />
                </Link>
				<Link to="#contact" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu} className={activeNav === '#contact'? 'active' : ''}>
                    <RiCustomerService2Fill />
                </Link>
			</nav>
		);
}

export default Nav;
