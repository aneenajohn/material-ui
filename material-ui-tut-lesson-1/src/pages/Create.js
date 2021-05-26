import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Create() {
  function clickHandler(){
  }
  return (
    <div>
      <Button type="submit" color="secondary" 
        onClick={()=> clickHandler()}
      >
        Submit
      </Button>
      <Button color="primary" variant="contained">
        Home
      </Button>
      <Button color="primary" variant="outlined" disableElevation>
        About
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  )
}
