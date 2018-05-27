import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Card, Loader } from 'semantic-ui-react';

export class Cards extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }
  componentWillMount(){
    this.props.getBanners()
  }
  renderIframe = () => {
    console.log('render iframe')
  }
  renderBanners = (item) => {
    console.log(item)
    return(
      <Card 
      key={item.id}
      image={item.preview_url}
      onClick={this.renderIframe}
      >
      </Card>
    )
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Card.Group stackable itemsPerRow={4}>
          {this.props.bannerReducer.banners ?
          this.props.bannerReducer.banners.map(this.renderBanners)
          :
          <Loader active inline='centered' />
          }
        </Card.Group>
      </div>
    )
  }
}

function mapStateToProps({bannerReducer}){
  return { bannerReducer}
}

export default connect(mapStateToProps, actions)(Cards)
