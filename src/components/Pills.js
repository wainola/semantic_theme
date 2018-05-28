import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterDesktop, filterMobile, filterVideos, allBanners } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Label } from 'semantic-ui-react';

class Pills extends Component {
  constructor(props){
    super(props)
    this.clickFilter = this.clickFilter.bind(this)
  }
  clickFilter(event){
    // switch for hiding cards
    const { bannerReducer } = this.props

    switch(event.target.id){
      case 'desktop':
        this.props.filterDesktop(bannerReducer.originalState ? bannerReducer.originalState : bannerReducer.banners)
        break;
      case 'mobile':
        this.props.filterMobile(bannerReducer.originalState ? bannerReducer.originalState : bannerReducer.banners)
        break
      case 'video':
        this.props.filterVideos(bannerReducer.originalState ? bannerReducer.originalState : bannerReducer.banners)
        break
      default:
        this.props.allBanners(bannerReducer.originalState ? bannerReducer.originalState : bannerReducer.banners)
        break
    }
  }
  render() {
    return (
      <div>
        <Label as='a' color='blue' onClick={this.clickFilter} id='desktop'>
          Desktop
        </Label>
        <Label as='a' color='red' onClick={this.clickFilter} id='mobile'>
          Mobile
        </Label>
        <Label as='a' color='orange' onClick={this.clickFilter} id='video'>
          Video
        </Label>
        <Label as='a' color='teal' onClick={this.clickFilter} id='all'>
          All
        </Label>
      </div>
    )
  }
}

function mapStateToProps({bannerReducer}){
  return {bannerReducer}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    filterDesktop,
    filterMobile,
    filterVideos,
    allBanners
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pills)
