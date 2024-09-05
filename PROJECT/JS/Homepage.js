import React from 'react';
import parseHtml from 'react-html-parser';
import HomepageHtml from './Homepage.html';

function Homepage() {
  return parseHtml(HomepageHtml);
}

export default Homepage;