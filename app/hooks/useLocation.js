import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
    const [location, setLocation] = useState();

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestBackgroundPermissionsAsync();
            if (!granted) return;
    
            const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
            setLocation({ latitude, longitude });
        } catch (e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        getLocation();
    }, []);

    return location;
};

export default useLocation;