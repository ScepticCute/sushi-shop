import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={3.2}
    width={280}
    height={370}
    viewBox="0 0 280 370"
    backgroundColor="#bdbdbd"
    foregroundColor="#e6e6e6"
    {...props}>
    <rect x="291" y="81" rx="3" ry="3" width="67" height="11" />
    <rect x="5" y="5" rx="30" ry="30" width="280" height="200" />
    <rect x="5" y="215" rx="10" ry="10" width="180" height="28" />
    <rect x="5" y="250" rx="10" ry="10" width="270" height="44" />
    <rect x="10" y="302" rx="6" ry="6" width="70" height="16" />
    <rect x="5" y="330" rx="10" ry="10" width="160" height="38" />
    <rect x="180" y="330" rx="10" ry="10" width="90" height="38" />
  </ContentLoader>
);

export default MyLoader;
