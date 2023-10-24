import PropTypes from 'prop-types';
import './linksSection.css';
import { linkIcon } from '../assets/linksvg';

/**
 * Primary UI component for user interaction
 */
export const LinksSection = ({urls}) => {

 console.log('redering links section')
 console.log(urls)


  let statusTranslator = new Map([
    ["failed", 'red' ],
    ["completed", 'green'],
    ["processing", 'gray']
  ])

  
  return (
    <div className='wrapper-urls'> 
      {urls.length > 0 ?
      urls.map((item, index) => (
        <div key={index} className='content'>
          <div style={{display: 'flex', gap: "10px", alignItems:'center'}} className='url-label'> 
            <span> {item['displayName']}</span>
            <a href={item['displayName']} target='blank'>
            <div>
              <svg
                width="15"  // Set the desired width
                height="15" // Set the desired height
                fill='black'
                xmlns="http://www.w3.org/2000/svg"
                dangerouslySetInnerHTML={{ __html: linkIcon }}
              />
            </div>
            </a>
          </div>
          <div> <span style={{color: statusTranslator.get(item["status"])}}> {item['status']} </span> </div>
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
  urls: []
};
