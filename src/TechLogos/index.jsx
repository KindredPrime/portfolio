import PropTypes from 'prop-types';
import './index.css';

function TechLogos(props) {
  const { logos } = props;

  return (
    <div className="TechLogos">
      {logos.map(({id, src, alt, classNames}) => (
        <img key={`logo-${id}`} src={src} alt={alt} className={classNames} />
      ))}
    </div>
  );
}

TechLogos.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      classNames: PropTypes.string.isRequired
    })
  ).isRequired
}

export default TechLogos;