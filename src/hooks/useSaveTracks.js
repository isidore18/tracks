import { useContext} from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';

export default () => {
    const {createTrack} = useContext(TrackContext);
    const {state: {locations, name}, reset} = useContext(LocationContext);

    // console.log('1', useContext(TrackContext));
    
    const saveTrack = async() => {
        await createTrack(name, locations);
        reset();
        navigate('TrackList'); 
    }

    return [saveTrack];
}