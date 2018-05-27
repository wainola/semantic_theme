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
    marginBottom: 'auto'
  }
};

export class Cards extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      iframe: {}
    }
  }
  componentWillMount(){
    this.props.getBanners()
  }
  renderIframe = (data) => {
    console.log('render iframe')
    console.log('data iframe', data)
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
    console.log(this.state.iframe)
    return ( 
      <div>
        <Card.Group stackable itemsPerRow={4}>
          {this.props.bannerReducer.banners ?
          this.props.bannerReducer.banners.map(this.renderBanners)
          :
          <Loader active inline='centered' />
          }
          <Modal
            open={isOpen}
            basic
            style={inlineStyle.modal}>
          <Modal.Content
            style={{
              marginLeft: '50%',
            }}>
            {Object.entries(this.state.iframe).length !== 0 ? 

            <iframe className='centered' width={this.state.iframe.dimensions.width ? this.state.iframe.dimensions.width : ''} height={this.state.iframe.dimensions.height ? this.state.iframe.dimensions.height : ''} src={`${this.state.iframe.url ? this.state.iframe.url : ''}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> 

            : 
            'nada'}
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Close
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
