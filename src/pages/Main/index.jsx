import { useState, useEffect, useCallback, memo } from 'react';
import api from 'service/api';
import { Container } from './styles';
import Board from './components/Board';

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil")

  const getCovidData = useCallback((country) => {
    api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country]);

  return (
    <Container>
      <div className='mb-2'>

      </div>
      <Board data={data} />
    </Container>
  );
}

export default memo(Main);
