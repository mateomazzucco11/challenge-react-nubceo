import React from 'react'
import { useNavigate } from 'react-router'

import Button from '@restart/ui/esm/Button'
import Dropdown from '@restart/ui/esm/Dropdown'

import { Col, DropdownButton } from 'react-bootstrap'

export const NavBar = ({ genre, setGenreFind }) => {
  const navigate = useNavigate()
  const handleSelect = (e) => {
    setGenreFind(e)
  }
  const handleLogout = () => {
    localStorage.removeItem("access_token")
    setTimeout(()=>{ navigate("/login")},500)
  }
  return (
    <Col md="3" sm="3" className="mb-1 container">
      <div className="row" style={{flexWrap: "nowrap"}}>
        <DropdownButton
          title="Filter for genre"
          onSelect={(e) => handleSelect(e)}
          >
            <Dropdown.Item eventKey="default">All genres</Dropdown.Item>
            {
              genre.map((element, key) => {
                return (
                    <Dropdown.Item eventKey={element.code} key={key}>{element.name}</Dropdown.Item>
                )
              })
            }
        </DropdownButton>
        <Button className="btn btn-primary btn-danger" onClick={handleLogout}>Logout</Button>
      </div>
    </Col>
  )
}
