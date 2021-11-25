import React, { useEffect, useState } from 'react';

import { Col, Row, Spinner } from 'react-bootstrap';

import { CardBands } from '../../components/CardBands';
import { NavBar } from '../../components/NavBar';
import { useFetch } from '../../hooks/useFetch';

export const BandsScreen = () => {
  const [ genreFind, setGenreFind ] = useState("default")
  const [ dataGenreFilter, setGenreFilter ] = useState()
  const [ dataRecivedSearch, setDataRecivedSearch ] = useState()
  const [ searchForNameArtist, setSearchForNameArtist] = useState("")
  const [ searchForIdArtist, setSearchForIdArtist ] = useState("")
  const [ sort, setSort ] = useState("")

  const urlBands = `${process.env.REACT_APP_ENDPOINT_URL}/bands${sort}`;
  const urlSearchForName = `${process.env.REACT_APP_ENDPOINT_URL}/bands?name=${searchForNameArtist}`;
  const urlSearchForId = `${process.env.REACT_APP_ENDPOINT_URL}/bands?id=${searchForIdArtist}`;
  const urlGenre = `${process.env.REACT_APP_ENDPOINT_URL}/genre`;
  const urlAlbums = `${process.env.REACT_APP_ENDPOINT_URL}/albums`;

  const { data: dataBands, loading: loadingBands } = useFetch(urlBands);
  const { data: dataGenre, loading: loadingGenre } = useFetch(urlGenre);
  const { data: dataAlbums, loading: loadingAlbums } = useFetch(urlAlbums);
  const { data: dataSearchForName } = useFetch(urlSearchForName);
  const { data: dataSearchForId } = useFetch(urlSearchForId);

  
  useEffect(()=> {
    
    if(genreFind === "default"){
      setGenreFilter()
    } else  {
      setGenreFilter(dataBands.filter(el=> el.genreCode === genreFind))
    } 
    
    if(dataSearchForName?.length <= 0 && dataSearchForId?.length <= 0){
      setDataRecivedSearch()
      return
    } if(dataSearchForName?.length >= 1) {
      setDataRecivedSearch(dataSearchForName)
      return
    } if (dataSearchForId?.length >= 1) {
      setDataRecivedSearch(dataSearchForId)
      return
    }

  }, [genreFind, dataBands, dataSearchForId, dataSearchForName])

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
              <NavBar genre={dataGenre} setGenreFind={setGenreFind} setSearchForNameArtist={setSearchForNameArtist} setSearchForIdArtist={setSearchForIdArtist} setSort={setSort}/>
              {
                <Row>
                  {
                    (dataRecivedSearch?.length >= 1)? (
                      dataRecivedSearch?.map(element => {
                        return (
                          <Col md="6" sm="6" className="mb-1 container" key={element.id}>
                            <div className="row">
                              <CardBands data={element} genre={dataGenre} albums={dataAlbums}/>
                            </div>
                          </Col>
                        )
                    })):(
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
                        dataBands?.map(element => {
                          return (
                            <Col md="6" sm="6" className="mb-1 container" key={element.id}>
                              <div className="row">
                                <CardBands data={element} genre={dataGenre} albums={dataAlbums}/>
                              </div>
                            </Col>
                          )
                      }))
                    )
                  }
                </Row>
              }
            </>
          )
      }
    </>
  )
}
