import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:8080/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cats</h1>
      <List className="space-y-2">
        {cats.map((cat) => (
          <ListItem key={cat.id} className="border p-4 rounded-lg shadow-md">
            <div className="flex justify-between">
              <span className="font-semibold">{cat.name}</span>
              <span className="text-gray-500">{cat.deleted ? "Deleted" : "Active"}</span>
            </div>
            <div className="text-sm text-gray-600">
              Created At: {new Date(cat.createdAt).toLocaleString()}
            </div>
          </ListItem>
        ))}
      </List>
      <SubmitCat fetchCats={fetchCats} />
    </div>
  );
};

export default Cats;
