import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container sx={{ mt: 2, width:"25%", }} >
      <TextField id="search" type="search" value={searchTerm} onChange={handleChange}
        sx={{
            width: 600,
            "& .MuiInputBase-input": {
              color: "white", // Set the text color to white
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white !important", // Set the border color to white unconditionally
            },
            "& .MuiInputAdornment-positionEnd > .MuiSvgIcon-root": {
              color: "white", // Set the color of the search icon to white
            },
          }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}