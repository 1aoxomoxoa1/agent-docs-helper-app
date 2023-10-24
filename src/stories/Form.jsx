import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import './form.css';
import axios from 'axios';
import { LinksSection } from './LinksSection';


async function callApi(agentId, apiKey, environment, setDataOut, setAgentName){
  const base_url = "https://api.oneai.com/agent/v1"
  console.log(environment)

  const headers = {
      "accept": "application/json",
      "api-key": apiKey,
      "Content-Type": "application/json",
  }
  const url = `${base_url}/list/documents?agent_id=${agentId}`;

  try {
    const response = await axios.get(url, { headers });
    // Handle the response data here
    console.log(response.data);
    let dataNeeded = []

    for (const data of response.data) {
      let dataToAppend = {
        url: data['url'],
        agentId: data['agent_id'],
        documentId: data['document_id'],
        status: data['status']
      }

      dataNeeded.push(dataToAppend)
    }

    const completedItems = dataNeeded.filter((item) => item['status'] === 'completed')
    const nonCompletedItems = dataNeeded.filter((item) => item['status'] !== 'completed')
    const combinedArray = completedItems.concat(nonCompletedItems)

    
    const url2 = `${base_url}/agent/${agentId}`

    const response2 = await axios.get(url2, { headers });

    console.log(response2.data)
    let agent_name = response2.data['public_name']
    setAgentName(agent_name)


   console.log(typeof combinedArray)
   console.log(combinedArray)

    setDataOut(combinedArray)

  } catch (error) {
    // Handle any errors here
    console.error('Axios error:', error);
  }
}



/**
 * Primary UI component for user interaction
 */
export const MyForm = () => {

  const [agentId, setAgentId] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [environment, setEnvironment] = useState('production');
  const [query, setQueryBy] = useState('completed')
  const [dataOut, setDataOut] = useState([])
  const [agentName, setAgentName] = useState([])

  function checkStates(){ 
    console.log('working working in checkStates:')
    console.log(agentId, apiKey, environment)
    callApi(agentId, apiKey, environment, setDataOut, setAgentName)
  }

  function goBackCalled(){
    setDataOut([])
  }

  const handleAgentIdChange = (e) => {
    console.log('calling')
    console.log(agentId)
    setAgentId(e.target.value);
  };

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleEnvironmentChange = (e) => {
    setEnvironment(e.target.value);
  };

  const handleQueryChange = (e) => {

    console.log(dataOut)
    console.log(e.target.value)
    setQueryBy(e.target.value)
    let newDataOutOne = dataOut.filter((item) => item['status'] == e.target.value)
    let newDataOutTwo = dataOut.filter((item) => item['status'] != e.target.value)

    let newData = [...newDataOutOne, ...newDataOutTwo]
    console.log(newDataOutOne)
    console.log(newDataOutTwo)
    console.log('new data')
    console.log(newData)
    setDataOut(newData)

  }

  return (
    dataOut.length === 0 ? (
    <div>
      <div className='form-container'>
      <div>
        <label htmlFor="agentId" className='label-myForm'>Agent ID:</label>
        <input
          type="text"
          id="agentId"
          className='input-myForm'
          value={agentId}
          onChange={handleAgentIdChange}
        />
      </div>
      <div>
        <label htmlFor="apiKey" className='label-myForm'>API Key:</label>
        <input
          type="text"
          id="apiKey"
          className='input-myForm'
          value={apiKey}
          onChange={handleApiKeyChange}
        />
      </div>
      <div>
        <label htmlFor="environment" className='label-myForm'>Environment:</label>
        <select
          id="environment"
          className='input-select-myForm'
          value={environment}
          onChange={handleEnvironmentChange}
        >
          <option value="production">Production</option>
          <option value="staging">Staging</option>
        </select>
      </div>
      <Button 
        primary={true} 
        label={"Get Agent Data"} 
        backgroundColor={"#4d4dff"} 
        size={"large"}
        onClick = {() => checkStates()}>
    </Button>
    </div>
    </div>
  )
  : ( 
  <div> 
    <div> 
      <div> 
        <Button 
          primary={true} 
          label={"Back"} 
          backgroundColor={"#4d4dff"} 
          size={"small"}
          onClick = {() => goBackCalled()}>
        </Button>
        <h2>agent: {agentName}</h2>
      </div>
      <div className='header'> 
        <div className='table-sec'> 
          <table className="data-table">
          <tbody>
            <tr>
              <td>Completed</td>
              <td>{dataOut.filter((data) => data["status"] === 'completed').length}</td>
            </tr>
            <tr>
              <td>Failed</td>
              <td>{dataOut.filter((data) => data["status"] === 'failed').length}</td>
            </tr>
            {dataOut.filter((data) => data["status"] === 'processing').length > 0 ? (
              <tr>
                <td>Processing</td>
                <td>{dataOut.filter((data) => data["status"] === 'processing').length}</td>
              </tr>
            ) : null}
            <tr>
              <td> <b> Total </b></td>
              <td> <b>{dataOut.length} </b></td>
            </tr>
          </tbody>
          </table>
        </div>
        <div className='sorting-div'>
          <label htmlFor="sorting">See By:</label>
          <select
              id="sorting"
              className='input-select-myForm-2'
              value={query}
              onChange={handleQueryChange}
            >
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
              <option value="processing">Processing</option>
            </select>
          </div>
      </div>
    </div>
    <LinksSection urls={dataOut}> </LinksSection>
  </div>
  )
  );
};

MyForm.propTypes = {
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

MyForm.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
