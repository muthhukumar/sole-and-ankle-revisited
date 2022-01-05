import React from 'react'
import styled from 'styled-components/macro'

import {COLORS, QUERIES, WEIGHTS} from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import Icon from '../Icon'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileViewNavigation>
          <Icon id="shopping-bag" strokeWidth="1px" size={24} color={COLORS.gray[900]} />
          <Icon id="search" strokeWidth="1px" size={24} color={COLORS.gray[900]} />
          <Icon id="menu" strokeWidth="1px" size={24} color={COLORS.gray[900]} />
        </MobileViewNavigation>
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
    </header>
  )
}

const MobileViewNavigation = styled.div`
  margin-left: auto;
  display: none;

  @media ${QUERIES.phone} {
    gap: 28px;
  }

  @media ${QUERIES.phoneAndUp} {
    gap: 40px;
  }

  @media ${QUERIES.tablet} {
    display: flex;
  }
`

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  min-height: 72px;
  border-bottom: 1px solid ${COLORS.gray[500]};
  padding: 24px 32px 20px;

  max-width: 100vw;
  overflow-x: auto;

  @media ${QUERIES.phone} {
    padding: 24px 16px 20px;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tablet} {
    display: none;
  }
`

const Side = styled.div`
  flex: 1;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

export default Header
