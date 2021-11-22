import React from 'react';
import { Spinner } from 'react-bootstrap';
import { CardBands } from '../../components/CardBands';
import { useFetch } from '../../hooks/useFetch';

export const BandsScreen = () => {
  const urlBands = `${process.env.REACT_APP_ENDPOINT_URL}/bands`;
  const urlGenre = `${process.env.REACT_APP_ENDPOINT_URL}/genre`;

  const { data: dataBands, loading: loadingBands } = useFetch(urlBands);
  const { data: dataGenre } = useFetch(urlGenre);

  return (
    <>
      {
        loadingBands
          ? (
            <Spinner animation="grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )
          : (
            <>
              {
                dataBands.map(element => {
                  return (
                    <div className="mb-1" key={element.id}>
                      <CardBands data={element} />
                    </div>
                  )
                })
              }
            </>
          )
      }
    </>
  )
}
