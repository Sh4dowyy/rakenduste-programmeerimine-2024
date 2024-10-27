import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type SubmitHobbyProps = {
  fetchHobbies: () => void;
};

const SubmitHobby = ({ fetchHobbies }: SubmitHobbyProps) => {
  const [name, setName] = useState("");

  const submitHobby = async () => {
    try {
      const response = await fetch("http://localhost:8080/hobbies", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      });

      if (response.ok) {
        console.log("Success", response);
        // Snackbar success
      } else {
        console.warn("No success");
        // Snackbar
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    submitHobby();
    setTimeout(fetchHobbies, 100);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Hobby title"
            onChange={(event) => setName(event.target.value)}
          />
          <Button type="submit">Add</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitHobby;