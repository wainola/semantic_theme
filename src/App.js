import React, { Component } from 'react';
import { Responsive, Container, Image, Grid } from 'semantic-ui-react' 
import Pills from './components/Pills'
import Cards from './components/Cards'
import fondo from './assets/images/background.png'

class App extends Component {
  render() {
    return (
      <div>
        <Responsive>
          <Container>
            <Grid verticalAlign='middle' textAlign='center'>
              <Grid.Row>
                <Grid.Column>
                  <Image src={fondo} fluid />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Pills />
              </Grid.Row>
              <Grid.Row>
                <Cards />
              </Grid.Row>
            </Grid>
          </Container>
        </Responsive>
      </div>
    );
  }
}

export default App;
