import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  return (
    <section data-testid="story" className="story">
      <div className="container"></div>
    </section>
  );
};

export default Story;
