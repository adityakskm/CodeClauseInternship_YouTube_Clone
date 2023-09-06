import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  const paperStyles = {
    borderRadius: 20,
    border: '1px solid #e3e3e3',
    pl: 2,
    boxShadow: 'none',
    mr: { sm: 5 },
  };

  const inputStyles = {
    flex: 1,
    padding: '10px',
    border: 'none',
  };

  const iconButtonStyles = {
    padding: '10px',
    color: 'red',
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} sx={paperStyles}>
      <InputBase
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={inputStyles}
      />
      <IconButton type="submit" sx={iconButtonStyles} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
