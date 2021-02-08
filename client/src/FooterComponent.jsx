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
  padding: 0rem 4rem;
`;

const BottomHalfContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 0 100%;
  justify-content: space-around;
  text-align: left;
  padding: 0rem 4rem;
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
  font-weight: bold;
`;

const EmailForm = styled.form`
  padding-top: 2rem;
  border-color: white;
  border-bottom: solid;
  width: fit-content;
`;

const EmailInput = styled.input`
  background-color: transparent;
  border-style: solid;
  border-color: transparent;
  color: white;
`;

const SignMeUp = styled.div`
  border-style: solid;
  border-color: white;
  border-radius: 5rem;
  margin: 4rem 0rem;
  padding: 5px 32px;
  width: fit-content;
  color: black;
  background-color: white;
  font-weight: bold;
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
          <div>
            <div>Sign up for exclusive offers, original stories, activism awareness, events and more.</div>
            <EmailForm>
              <label>
                <EmailInput type='text' placeholder="Email Address" />
              </label>
            </EmailForm>
            <SignMeUp >Sign Me Up</SignMeUp>
          </div>
        </InfoContainer>
        <InfoContainer>
        <h2>Subscribe</h2>
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