import { useEffect, useState } from "react";
import {
  Card,
  HomeCardContainer,
  Resolution,
  UserName,
} from "./Components.styled";

type OneResolution = {
  name: string;
  resolution: string;
  color: string;
};

const Homepage: React.FC = () => {
  const [resolutions, setResolutions] = useState<OneResolution[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3020/api/v1");
        const data = await response.json();
        await setResolutions(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <HomeCardContainer>
        {resolutions.map((resolution) => (
          <Card>
            <Resolution>{resolution.resolution}</Resolution>
            <UserName color="#388087">{resolution.name}</UserName>
          </Card>
        ))}
      </HomeCardContainer>
    </div>
  );
};

export default Homepage;
