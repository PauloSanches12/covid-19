import { useState, useEffect, useCallback, memo } from 'react';
import api from 'service/api';
import { Container } from './styles';
import Board from './components/Board';
import Panel from './components/Panel/index';

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil");

  const updateAt = new Date().toLocaleString();

  const getCovidData = useCallback((country) => {
    api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country]);

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country)
  }

  return (
    <Container>
      <div className='mb-2'>
        <Panel 
          data={data} 
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </Container>
  );
}

export default memo(Main);
