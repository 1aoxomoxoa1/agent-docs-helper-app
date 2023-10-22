import PropTypes from 'prop-types';
import './linksSection.css';
/**
 * Primary UI component for user interaction
 */
export const LinksSection = ({urls}) => {

 console.log('redering links section')
 console.log(urls)


  let statusTranslator = new Map([
    ["failed", 'red' ],
    ["completed", 'green'],
    ["processing", 'dark grey']
  ])

  
  return (
    <div className='wrapper-urls'> 
      {urls.length > 0 ?
      urls.map((item, index) => (
        <div key={index} className='content'> 
          <p>{item['url']}</p>
          <div> <span style={{color: statusTranslator.get(item['status'])}}> {item['status']} </span> </div>
        </div>
        ))
      :
      <></>}
    </div>    
  );
};

LinksSection.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  urls: PropTypes.array
};

LinksSection.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
