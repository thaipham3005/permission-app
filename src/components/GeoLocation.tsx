import React, {useContext, useState, useEffect, useRef} from 'react'
// import styled from 'styled-components'

interface IProps {    
        lat: number;
    lon: number;
    
}
const GeoLocation: React.FC<IProps> = ({lat,lon}) => {
    const [currentGeo, setCurrentGeo] = useState<IProps>({
        lat: 10.34,
        lon: 103.54
    })
    return (
        <div className="GeoLocation content">
            <div>
                {/* {setCurrentGeo({lat: 10.34, lon: 103.54})} */}
                {` Current GeoLocation: Longitude ${currentGeo.lon} - Latitude: ${currentGeo.lat}`}
            </div>
        </div>
    )
}

export default GeoLocation
