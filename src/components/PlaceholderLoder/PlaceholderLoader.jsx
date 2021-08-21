import ContentLoader from "react-content-loader";
const PlaceholderLoader = (props) => {
  return (
    <ContentLoader
      speed={0.5}
      width={460}
      height={460}
      viewBox="0 0 460 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="13" y="5" rx="2" ry="2" width="350" height="335" />
    </ContentLoader>
  );
};

export default PlaceholderLoader;
