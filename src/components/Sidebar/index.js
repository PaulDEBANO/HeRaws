import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';
import BasicModal from "../Modal";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' >Home</SidebarLink>
                    <SidebarLink to='/simulator' >Simulator</SidebarLink>
                    <SidebarLink to='/about' >About</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <BasicModal></BasicModal>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;