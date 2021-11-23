import React from 'react'
import { useNavigate } from 'react-router'

import Button from '@restart/ui/esm/Button'
import Dropdown from '@restart/ui/esm/Dropdown'

import { DropdownButton, Form, FormControl } from 'react-bootstrap'

export const NavBar = ({ genre, setGenreFind, setSearchForNameArtist, setSearchForIdArtist, setSort }) => {
  const navigate = useNavigate()

  const handleSelectGenre = (e) => {
    setGenreFind(e)
  }

  const handleSelectSort = (e) => {
    if(e === "desc") {
      setSort("?_sort=name&_order=desc,asc")
    } if (e === "asc") {
      setSort("?_sort=name&_order=asc,desc")
    } if (e === "") {
      setSort("")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("access_token")
    setTimeout(()=>{ navigate("/login")},500)
  }

  const handleSearch = (e) => {
    if (e.target.value.match(/^\d/)) {
      // Here we are checking if it starts with a number
      setSearchForIdArtist(e.target.value)
    } else {
      setSearchForNameArtist(e.target.value)
    }
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <Form className="d-flex mb-2">
          <FormControl type="text" placeholder="Search by full name with spaces and capital letters or ID of artist" className="mr-sm-2" onChange={e => handleSearch(e)}/>
          <Button variant="outline-success">Search </Button>
        </Form>
        <DropdownButton
          title="Filter for genre"
          className="mb-2"
          onSelect={(e) => handleSelectGenre(e)}
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
        <DropdownButton
          title="Filter by ascending or descending"
          className="mb-2"
          onSelect={(e) => handleSelectSort(e)}
          >
            <Dropdown.Item eventKey="">No sort</Dropdown.Item>
            <Dropdown.Item eventKey="asc">Ascending</Dropdown.Item>
            <Dropdown.Item eventKey="desc">Descending</Dropdown.Item>
        </DropdownButton>
        <Button className="btn btn-primary btn-danger mb-2" onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  )
}
