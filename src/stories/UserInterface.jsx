import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './user-interface.css';
import './button.css'
import {Button} from './Button'



export function handleButtonCall(agentId, apiKey, environment){ 
  console.log('something')
  console.log(`'AgentID: ${agentId}, apiKey: ${apiKey}, ${environment}`)
  
}




/**
 * Primary UI component for user interaction
 */
export const UserInterface = () => {
  


    
    console.log('test')

    function handleButtonCall(agentId, apiKey, environment){ 
      console.log('something')
      console.log(`'AgentID: ${agentId}, apiKey: ${apiKey}, ${environment}`)
    }

  return (
    <div> 
      <Button 
      primary={true} 
      label={"Get Agent Data"} 
      backgroundColor={"#4d4dff"} 
      size={"large"}> 
      onClick = {handleButtonCall}
    </Button>
    </div>
    
  );
};

UserInterface.propTypes = {
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
};

UserInterface.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
