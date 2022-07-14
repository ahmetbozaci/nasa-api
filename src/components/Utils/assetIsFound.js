import { Image } from 'react-bootstrap';

const assetIsFound = (assets, alt, src) => (assets.length !== 0 ? (
  <a href={assets[0].href}>
    <Image alt={alt} src={src} fluid rounded thumbnail />
  </a>
) : (
  <Image alt={alt} src={src} fluid rounded thumbnail />
));
export default assetIsFound;
