import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export const CardBands = ({data, genre, albums}) => {
  const navigate = useNavigate();
  const FilterForChangeGenderName = genre.filter(element => data.genreCode === element.code)
  
  const FilterForArtistAlbums = albums.filter(element => data.id === element.bandId)
  let genredName;
  let albumsFilters;
  if (FilterForChangeGenderName.length === 1){
    genredName = FilterForChangeGenderName[0].name
  }
  if (FilterForArtistAlbums.length >= 1){
    albumsFilters = FilterForArtistAlbums
  }
  const artistDetails = (data) => {
    navigate('/artist', {state: [data, genredName, albumsFilters], })
  }

  return (
    
      <Card className="text-center ">
        <Card.Header>{data.name}</Card.Header>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Button variant="primary" onClick={(e) => artistDetails(data)}>More details</Button>
        </Card.Body>
      </Card>
  )
}
