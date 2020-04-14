import React, {useContext} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import MapView, { Polyline } from 'react-native-maps';


const Map = () => {
    let points = [];

    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: 50.62349180227341 + i * 0.001,
                longitude: 3.04368583316041447 + i * 0.001
            })
        } else {
            points.push({
                latitude: 50.62349180227341 - i * 0.001,
                longitude: 3.04368583316041447 + i * 0.001
            })
        }
    }

    return (
        <MapView 
            style={styles.map} 
            initialRegion={{
                latitude: 50.62349180227341,
                longitude: 3.04368583316041447,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            }}
        >
            <Polyline 
                coordinates={points}
            /> 
        </MapView>
  )
}

const styles = StyleSheet.create({
    map: {
        height: 350
    }
})

export default Map;
