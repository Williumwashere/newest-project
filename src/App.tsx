import { Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/atoms/Card";

interface Cat {
  name: string;
  image_link: string;
  intelligence: number;
  playfulness: number;
}
function App() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    fetchCats()
  },[]);

  const fetchCats = async () => {
    const response = await axios.get<Cat[]>(
      "https://api.api-ninjas.com/v1/cats?name=abyssinian",
      { headers: { "X-Api-Key": "lZOkNRcxcRbTIitJ2BjLKw==7ukbxScp64NxhMke" } }
    );
    setCats(response.data)
  };
  return (
    <Stack>
      {cats.map((cat)=> <Card>{cat.name}</Card>)}
    </Stack>
  );
}

export default App;
