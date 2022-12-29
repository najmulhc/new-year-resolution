// all the styled components will be here

import styled from "styled-components";

interface UserProps {
  color: string;
  children: string;
}

export const H1 = styled.h1`
  color: teal;
`;

export const HomeCardContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin: 3rem;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem #1010113d;
  min-height: 4rem;
`;

export const Resolution = styled.h2`
  font-weight: 500;
  font-size: larger;
  color: #020101;
  font-family: "montserrat";
  margin-bottom: 0.5rem;
`;

export const UserName = styled.h3<UserProps>`
    font-size: medium;
    text-align: right;
    color: ${props => props.color};
    margin: .25rem;
    margin-top: 2rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #388087;
  color: #fff;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

export const Button = styled.button`
  background-color: #fff;
  color: #388087;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
`;