import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

type Hobby = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const theme = createTheme({
    palette: {
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
    typography: {
      h3: {
        fontSize: "2rem",
        fontWeight: "bold",
      },
    },
  });

const Hobbies = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  const fetchHobbies = async () => {
    const response = await fetch("http://localhost:8080/hobbies");
    const data = await response.json();
    setHobbies(data);
  };

  useEffect(() => {
    fetchHobbies();
  }, []);

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
            <Box>
            <Typography variant="h3" color="primary">
                Hobbies
            </Typography>
            <List>
                {hobbies.map((hobby) => (
                <ListItem key={hobby.id}>{JSON.stringify(hobby)}</ListItem>
                ))}
            </List>
            </Box>
    </ThemeProvider>
  );
};

export default Hobbies;