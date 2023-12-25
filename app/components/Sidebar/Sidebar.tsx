/** @format */

"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";

function Sidebar() {
	const { theme } = useGlobalState();
	// console.log(theme);

	return (
		<SidebarStyled theme={theme}>
			<div className='profile'>
				<div className='profile-overlay'></div>
				<div className='image'>
					<Image
						width={70}
						height={70}
						src='/images/profile.png'
						alt='profile'
					/>
				</div>
        <span>
           Amira
        </span> 
        <span>
           Allagui
        </span>
			</div>
      <ul className="nav-items"></ul>
		</SidebarStyled>
	);
}

const SidebarStyled = styled.nav`
	position: relative;
	width: ${(props) => props.theme.sidebarWidth};
	background-color: ${(props) => props.theme.colorBg2};
	border: 2px solid ${(props) => props.theme.borderColor2};
	border-radius: 1rem;
`;
export default Sidebar;
