import { Card, HomeCardContainer, Resolution, UserName } from "./Components.styled";

const Homepage: React.FC = () => {
  return (
    <div>
       <HomeCardContainer>
         <Card> 
            <Resolution>
                I want to play soccer! I love to play the game for a long time with my friends.
            </Resolution>
            <UserName color="purple">
                Najmul Huda Chowdhury
            </UserName>
         </Card>
         <Card> 
            <Resolution>
                I want to steal more data from humans so that I can sell them and get richer!
            </Resolution>
            <UserName color="#128dff">
                Mark Jukarburg
            </UserName>
         </Card>
       </HomeCardContainer>
    </div>
  );
};

export default Homepage;