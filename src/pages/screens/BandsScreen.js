import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { CardBands } from '../../components/CardBands';
import { NavBar } from '../../components/NavBar';
import { useFetch } from '../../hooks/useFetch';

export const BandsScreen = () => {
  const [ genreFind, setGenreFind ] = useState("default")
  const [ dataGenreFilter, setGenreFilter ] = useState()
  
  const urlBands = `${process.env.REACT_APP_ENDPOINT_URL}/bands`;
  const urlGenre = `${process.env.REACT_APP_ENDPOINT_URL}/genre`;
  const urlAlbums = `${process.env.REACT_APP_ENDPOINT_URL}/albums`;

  const { data: dataBands, loading: loadingBands } = useFetch(urlBands);
  const { data: dataGenre, loading: loadingGenre } = useFetch(urlGenre);
  const { data: dataAlbums, loading: loadingAlbums } = useFetch(urlAlbums);
  
  useEffect(()=> {
    if(genreFind === "default"){
      setGenreFilter()
      return
    } else {
      setGenreFilter(dataBands.filter(el=> el.genreCode === genreFind))
    }
  }, [genreFind, dataBands])

  return (
    <>
      {
        loadingBands || loadingGenre || loadingAlbums
          ? (
            <div className="text-center">
              <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )
          : (
            <>
              <NavBar genre={dataGenre} setGenreFind={setGenreFind}/>
              {
                <Row>
                  {
                    (dataGenreFilter?.length >= 1 && dataGenreFilter !== undefined)?(
                      dataGenreFilter.map(element => {
                        return (
                          <Col md="6" sm="6" className="mb-1 container" key={element.id}>
                            <div className="row">
                              <CardBands data={element} genre={dataGenre} albums={dataAlbums}/>
                            </div>
                          </Col>
                        )
                    })):(
                      dataBands.map(element => {
                        return (
                          <Col md="6" sm="6" className="mb-1 container" key={element.id}>
                            <div className="row">
                              <CardBands data={element} genre={dataGenre} albums={dataAlbums}/>
                            </div>
                          </Col>
                        )
                    }))
                  }
                </Row>
              }
            </>
          )
      }
    </>
  )
}
