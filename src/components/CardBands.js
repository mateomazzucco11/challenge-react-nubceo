import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'

export const CardBands = ({data}) => {
  return (
    <Card className="text-center">
      <Card.Header>{data.name}</Card.Header>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
