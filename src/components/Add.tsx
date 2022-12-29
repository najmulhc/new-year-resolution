import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router";
import {
  Button,
  Card,
  CardContainer,
  Form,
  FormContainer,
  FormHeader,
  Input,
} from "./Components.styled";

type Color = "#300449" | "#e66a1f" | "#fdd02b" | "#e42a69" | "#3cb64f";
type User = {
  name: string;
  resolution: string;
  color: Color;
};
const Add: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [resolution, setResolution] = useState<string>("");
  const colors: Color[] = [
    "#300449",
    "#e66a1f",
    "#fdd02b",
    "#e42a69",
    "#3cb64f",
  ];
 
  const navigate = useNavigate();

  //for sending data to backend
  const handleResolutionSubmit = async (e: SyntheticEvent) => {
   await e.preventDefault();
    const user = {
      name,
      resolution,
      color: colors[Math.ceil(Math.random() * 5)],
    }; 
    console.log(JSON.stringify(user))
    await fetch("http://localhost:3020/api/v1", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  };
  return (
    <FormContainer>
      <Card>
        <Form>
          <FormHeader>Add My Resolution</FormHeader>
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Your name"
          />
          <Input
            onChange={(e) => setResolution(e.target.value)}
            type="text"
            placeholder="Enter Your Resolution"
          />
          <Button
            color="white"
            backgroundColor="teal"
            onClick={handleResolutionSubmit}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </FormContainer>
  );
};
export default Add;
