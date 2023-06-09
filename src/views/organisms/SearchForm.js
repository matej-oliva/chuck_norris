import PropTypes from 'prop-types';
import { Cached, Search } from '@mui/icons-material';
import { Box, Divider, IconButton, InputBase, MenuItem, Select } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOfCategories } from '../../features/categoryList';
import { fetchByCategory, fetchByText, fetchRandomJoke } from '../../features/joke';
import React from 'react';
import { StandardButton } from '../atoms';

export function SearchForm({ setSnack }) {
  const [category, setCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const categories = useSelector(listOfCategories);

  const dispatch = useDispatch();

  const handleSnack = useCallback(
    async (data) => {
      setSnack({
        open: true,
        msg: data.msg,
        state: data.status,
      });
    },
    [setSnack],
  );

  const getAJoke = useCallback(async () => {
    return new Promise((resolve) => {
      resolve(dispatch(fetchRandomJoke()));
    }).then(async (res) => {
      handleSnack(res.payload);
    });
  }, [dispatch, handleSnack]);

  const getAJokeByCategory = useCallback(
    async (category) => {
      return new Promise((resolve) => {
        resolve(dispatch(fetchByCategory(category)));
      }).then(async (res) => {
        setCategory(category);
        handleSnack(res.payload);
        setSearchText('');
      });
    },
    [dispatch, handleSnack],
  );

  const searchByText = useCallback(async () => {
    return new Promise((resolve) => {
      resolve(dispatch(fetchByText(searchText)));
    }).then(async (res) => {
      handleSnack(res.payload);
      setCategory('');
    });
  }, [dispatch, handleSnack, searchText]);

  const reset = useCallback(() => {
    setCategory('');
    setSearchText('');
    getAJoke();
  }, [getAJoke]);

  return (
    <>
      <Box sx={{ width: 'fit-content', my: '20px' }}>
        <StandardButton
          tooltip='Get a new random joke'
          icon={<Cached />}
          func={() => {
            reset();
          }}
        >
          Reset
        </StandardButton>
      </Box>
      <Box sx={(theme) => theme.inputBoxLook}>
        <InputBase
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchByText();
            }
          }}
          sx={{
            width: '100%',
          }}
          className='font'
          placeholder='Search new Chuck Norris joke...'
          inputProps={{
            'aria-label': 'Search new Chuck Norris joke',
          }}
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <IconButton aria-label='search' onClick={searchByText}>
          <Search />
        </IconButton>
      </Box>

      <Divider alt='divider' sx={{ my: '10px' }}>
        OR
      </Divider>
      <Select
        displayEmpty
        inputProps={{ 'aria-label': 'Search by category', className: 'font' }}
        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
        sx={{ '& .MuiInputBase-input': (theme) => theme.inputBoxLook }}
        value={category}
        onChange={(e) => {
          e.target.value === '' ? setCategory('') : getAJokeByCategory(e.target.value);
        }}
      >
        <MenuItem
          value=''
          sx={{
            color: '#b5b5b5',
          }}
          className='font'
        >
          Search by category...
        </MenuItem>
        {categories &&
          categories.map((category, index) => (
            <MenuItem key={index} value={category} className='font'>
              {category}
            </MenuItem>
          ))}
      </Select>
      <StandardButton
        style={{
          width: 'fit-content',
          mt: '10px',
          ml: 'auto',
        }}
        func={() => {
          if (category !== '' && category !== undefined) {
            getAJokeByCategory(category);
          } else {
            setSnack({ msg: 'No category chosen', open: true, state: 'error' });
          }
        }}
      >
        Next in category
      </StandardButton>
    </>
  );
}

SearchForm.propTypes = {
  setSnack: PropTypes.func,
};
