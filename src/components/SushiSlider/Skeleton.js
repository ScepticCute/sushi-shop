import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={220}
    height={260}
    viewBox="0 0 220 260"
    backgroundColor="#dbd1c7"
    foregroundColor="#cec9c5"
    {...props}>
    <rect x="10" y="21" rx="26" ry="26" width="200" height="141" />
    <rect x="10" y="175" rx="5" ry="5" width="100" height="20" />
    <rect x="10" y="204" rx="4" ry="4" width="80" height="12" />
    <rect x="10" y="224" rx="4" ry="4" width="75" height="25" />
    <rect x="110" y="213" rx="15" ry="15" width="100" height="37" />
  </ContentLoader>
);

export default MyLoader;
