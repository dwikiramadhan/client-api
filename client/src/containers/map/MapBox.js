import React, { Component } from 'react';
import { compose } from 'redux';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { connect } from 'react-redux';

// import '../../components/map/Map.css';
import { loadMaps } from '../../actions/maps'

const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }
    componentDidMount() {
        this.props.loadMaps();
    }
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    displayMarkers = () => {
        return this.props.data.map((item, index) => {
            return <Marker key={index} id={index} position={{
                lat: item.lat,
                lng: item.lang
            }} onClick={this.onMarkerClick} name={item.title} />
        })
    }

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={{ lat: -6.923735, lng: 107.688739 }}
                >
                    {this.displayMarkers()}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                            <span>this is marker for {this.state.selectedPlace.name}</span>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.maps
})

const mapDispatchToProps = (dispatch) => ({
    loadMaps: () => dispatch(loadMaps())
})

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    GoogleApiWrapper({
        apiKey: 'AIzaSyA_-3tuAmYaX0s3fOtVFK9kRxk9DNeO88Q'
    })
)

export default enhance(MapBox)