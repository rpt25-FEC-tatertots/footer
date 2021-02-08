import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  font-family: Nunito Sans;
  color: white;
`;

const TopHalfContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: -10px;
  margin-left: -10px;
`;

const BottomHalfContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 0 100%;
  justify-content: space-around;
  text-align: left;
  padding-left: 4rem;
  padding-right: 4rem;
`;

const InfoContainer = styled.div`
  flex-basis: 33.33%;
`;

const MoreInfoOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoreInfoOptionsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #444;
  height: auto;
`;

const StyledHelpListContent = styled.li`
  list-style-type: none;
  border-style: solid;
  border-color: white;
  border-radius: 5rem;
  margin: 10px 0px;
  padding: 5px 32px;
  width: fit-content;
`;

function FooterComponent() {
  return (
    <FooterContainer>
      <TopHalfContainer>
        <h2>We guarantee everything we make.</h2>
        <h2>Know how your clothes are made.</h2>
        <h2>Keep your gear in play.</h2>
        <h2>We give back for every sale.</h2>
      </TopHalfContainer>
      <BottomHalfContainer>
        <InfoContainer>
          <h2>Subscribe</h2>
          <div>Sign up for exclusive offers, original stories, activism awareness, events and more.</div>
        </InfoContainer>
        <InfoContainer>
          <h2>Need Help?</h2>
          <ul style={{padding: "0px"}}>
            <StyledHelpListContent>Help Center</StyledHelpListContent>
            <StyledHelpListContent>Order Status</StyledHelpListContent>
            <StyledHelpListContent>Returns and Exchanges</StyledHelpListContent>
            <StyledHelpListContent>Porudct Care and Repair</StyledHelpListContent>
            <StyledHelpListContent>Login</StyledHelpListContent>
          </ul>
        </InfoContainer>
        <InfoContainer>
          <h2>More Info</h2>
          <MoreInfoOptionsContainer>
            <MoreInfoOptionsColumn>
              <div>Patagonia Action Works</div>
              <div>Patagonia Provisions</div>
              <div>Worn Wear</div>
              <div>Gift Cards</div>
              <div>Find a Store</div>
              <div>Careers</div>
              <div>Press</div>

            </MoreInfoOptionsColumn>
            <MoreInfoOptionsColumn>
              <div>Patagonia Pro Program</div>
              <div>1% For The Planet</div>
              <div>International Orders</div>
              <div>Group Sales</div>
              <div>Privacy Policy</div>
              <div>California Transparency</div>
            </MoreInfoOptionsColumn>
          </MoreInfoOptionsContainer>
        </InfoContainer>
      </BottomHalfContainer>
    </FooterContainer>
  )
}

ReactDOM.render(<FooterComponent />, document.getElementById('footer'));