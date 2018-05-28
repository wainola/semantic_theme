import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Card, Loader, Modal, Button, Icon } from 'semantic-ui-react';
import './Card.css'

const inlineStyle = {
  modal: {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    heigth: '100vh',
    width: '100wh'
  }
};

export class Cards extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      iframe: {},
    }
  }
  componentWillMount(){
    this.props.getBanners()
  }
  renderIframe = (data) => {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen,
      iframe: {
        dimensions: {
          width: data.width,
          height: data.height
        },
        url: data.banner_url
      }
    })
  }
  renderBanners = (item) => {
    return(
      <Card 
      key={item.id}
      image={item.preview_url}
      onClick={() => this.renderIframe(item)}
      >
      </Card>
    )
  }
  handleClose = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    const { isOpen } = this.state
    let banners = []
    if(this.props.bannerReducer.banners){
      banners = this.props.bannerReducer.banners
    }
    return ( 
      <div>
        <Card.Group stackable itemsPerRow={banners.length !== 0 && banners.length > 2 ? 4 : 1}>
          {this.props.bannerReducer.banners ?
          this.props.bannerReducer.banners.map(this.renderBanners)
          :
          <Loader active inline='centered' />
          }
          <Modal
            open={isOpen}
            basic
            style={inlineStyle.modal}>
          <Modal.Content>
            {Object.entries(this.state.iframe).length !== 0 ? 
            <div>
              <iframe
               style={{
                 position: 'absolute',
                 marginTop: '50%',
                 top: parseInt(this.state.iframe.dimensions.width) <= 300 && parseInt(this.state.iframe.dimensions.height) === 600 ? 'calc(50% - 450px)' : 'calc(50% - 250px)',
                 left: 'calc(50% - 150px)' 
               }}
               align='middle' sandbox width={this.state.iframe.dimensions.width ? this.state.iframe.dimensions.width : ''} height={this.state.iframe.dimensions.height ? this.state.iframe.dimensions.height : ''} src={`${this.state.iframe.url ? this.state.iframe.url : ''}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            : 
            'nada'}
          </Modal.Content>
            <Modal.Actions>
             <Button style={{ zIndex: '99999999', position: 'absolute'}} inverted color='red' onClick={this.handleClose}>
               Close
             </Button>
            </Modal.Actions>
          </Modal>
        </Card.Group>
      </div>
    )
  }
}

function mapStateToProps({bannerReducer}){
  return { bannerReducer}
}

export default connect(mapStateToProps, actions)(Cards)
