import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select something</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        title: {selectedSong.title}
        <br />
        duration: {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return { selectedSong };
};

export default connect(mapStateToProps, null)(SongDetail);
