import React from 'react'
import styled from 'styled-components/macro'

import {QUERIES, WEIGHTS} from '../../constants'

import Breadcrumbs from '../Breadcrumbs'
import Select from '../Select'
import Spacer from '../Spacer'
import ShoeSidebar from '../ShoeSidebar'
import ShoeGrid from '../ShoeGrid'

const ShoeIndex = ({sortId, setSortId}) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <HideOnMobile>
            <Select label="Sort" value={sortId} onChange={ev => setSortId(ev.target.value)}>
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </HideOnMobile>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  )
}

const HideOnMobile = styled.div`
  @media ${QUERIES.phone} {
    display: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;

  @media ${QUERIES.tabletAndUp} {
    gap: 32px;
  }

  @media ${QUERIES.tablet} {
    flex-direction: column-reverse;
  }
`

const LeftColumn = styled.div`
  @media ${QUERIES.tabletAndUp} {
    flex-basis: 248px;
  }
`

const MainColumn = styled.div`
  flex: 1;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`

export default ShoeIndex
