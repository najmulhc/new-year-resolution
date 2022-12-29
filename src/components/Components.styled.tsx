// all the styled components will be here

import styled from "styled-components";

interface UserProps {
  color: string;
  children: string;
}

interface ButtonProps {
  color: string;
  backgroundColor: string
}

export const H1 = styled.h1`
  color: teal;
`;

export const CardContainer = styled.div`
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
  max-width: 20rem; 
`;

export const Resolution = styled.h2`
  font-weight: 500;
  font-size: larger;
  color: #020101;
  font-family: "montserrat";
  margin-bottom: auto;
`;

export const UserName = styled.h3<UserProps>`
  font-size: medium;
  text-align: right;
  color: ${(props) => props.color};
  margin-bottom: auto;
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

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const FormHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: teal;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.25rem;
  background-color: white;
  border: 1px solid teal;
  font-size: 1rem;
  color: teal;
  outline: none;
  border-radius: .25rem;
`;
export const Form = styled.form`
  display: flex;
  gap: .5rem;
  flex-direction: column;
  align-items: center;
`;

export const Creator = styled.p`
  text-align: center;
  margin: 1rem 0;
  color: teal;
`;