import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Boiler', duration: '5:15' },
    { title: 'Enter Sandman', duration: '6:15' },
    { title: 'Killing in the Name', duration: '7:15' },
    { title: 'Jump', duration: '4:15' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
