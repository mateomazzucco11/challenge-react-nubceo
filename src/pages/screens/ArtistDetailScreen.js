import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router';

export const ArtistDetailScreen = (props) => {
  const navigate = useNavigate()
  const { state } = useLocation();
  let artist;
  let genre;
  let albums;
  useEffect(() => {
    if (state === null) {
      navigate('/hola')
    } 
  }, [state, navigate])

  if (state !== null) {
    artist = state[0]
    genre = state[1]
    albums = state[2]
  }
  return (
    <Row className="d-flex justify-content-center mt-5">
      <Col md="11" sm="11" className="mb-1">
        <div className="card text-center">
          <div className="card-body">
            <h1>{artist.name}</h1>
            <div className="list-group list-group text-left">
              <p className='card-text'>Genre: {genre}</p>
              <p className='card-text'>Country origin: {artist.country}</p>
              <p className='card-text'>Year they started: {artist.year}</p>
              <p className='card-text'>Members of the band: {artist.members.map((el) => `${el.name},`).join(" ")}</p>
              <h3 className='text-center mb-5 mt-5'>Albums</h3>
              <div className="card text-center">
                {
                  (albums?.length <= 0)?null:(
                    albums?.map((element, value) => {
                      return (
                        <div className="card-body border-bottom" key={value}>
                          <p className='card-text'>Album name: {element.name}</p>
                          <p className='card-text'>Album creation: {element.year}</p>
                        </div> 
                      )
                    })
                  )
                }
              </div>
            </div>
            <button type='button' className="btn mt-5 btn-primary btn-block" onClick={()=> navigate("/")}>Back to all artists</button>
          </div>
        </div>
      </Col>
    </Row>
  )
}
