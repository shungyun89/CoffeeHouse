import React from 'react';
import { useState, useEffect, useRef } from 'react';

// component
import Navbar from '../../component/Navbar';
import StoreCardWrap from './StoreCardWrap'
import StoreCardSearch from './StoreCardSearch';

// CSS
import './mapStyle.scss';
import Logo from './img/好室咖啡logo深色.svg'

// googlemaps
import GoogleMapReact from 'google-map-react';



function StoreMapCardWrap(){
  
  // 載入指示器用
  const [ isLoading, setIsLoading ] = useState(false)

  // 儲存資料庫資料
  const [ data, setData ] = useState([]);
  // console.log(data);

  // 錯誤訊息用
  const [ error, setError ] = useState('')

  // map 使用
  const mapRef = useRef();
  const [ center, setCenter ] = useState({
    lat: 24.9725821,
    lng: 121.5297745,
  });
  const [ zoom, setZoom ] = useState(14);
  const StoreMarker = ({ text }) => <div className='mapMarker'><img src={Logo} alt="marker"></img>{text}</div>;
  const handleMarkerClick = (index)=>{
    console.log(index);
    // setCenter(({lat: thisLat, lng: thisLng}))
  };

  // 向遠端伺服器get資料
  const fetchData = async (keyword) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/store/map`)

      const results = await response.json()
      // 載入資料後設定到狀態中
      // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
      if (Array.isArray(results)) {
        setData(results)
      }

      const API_KEY = process.env.REACT_APP_GMAP_API_KEY;
      const LANGUAGE = "zh-Tw";
      const REGION = "TW";
      const GOOGLE_API = "https://maps.googleapis.com/maps/api/geocode/json";

      // 檢查地址資料是否有經緯度
      for (let i = 0; i < results.length; i++) {
        if(results[i].lat === null || results[i].lng === null || results[i].lat === '' || results[i].lng === ''){
          let address = results[i].city + results[i].area + results[i].address;
          let url = `${GOOGLE_API}?address=${encodeURIComponent(address)}&key=${API_KEY}&language=${LANGUAGE}&region=${encodeURIComponent(REGION)}`;
          const GEOresponse = await fetch(url).catch(() =>
            Promise.reject(new Error("Error fetching data"))
          );
          const GEOresults = await GEOresponse.json().catch(() => {
            console.log("Error parsing server response");
            return Promise.reject(new Error("Error parsing server response"));
          });
          if (GEOresults.status === "OK") {
            console.log(GEOresults);
            const updateLanLng = await fetch(`${process.env.REACT_APP_API_URL}/store/map/${i+1}/${GEOresults.results[0].geometry.location.lat}/${GEOresults.results[0].geometry.location.lng}`, {method: "PUT"});
            console.log(await updateLanLng.json());
          }
          console.log(
            `${GEOresults.error_message}.\nServer returned status code ${GEOresults.status}`,
            true
          )
        }
      }
    } catch (e) {
      // 作錯誤處理
      console.log(e)
      setError(e.message)
    }
  }

  // 向遠端伺服器get資料 (過濾)
  const fetchFilterData = async (keyword) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/store/map/` + keyword
      )

      const results = await response.json()

      // 載入資料後設定到狀態中
      // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
      if (Array.isArray(results)) {
        setData(results)
      }

    } catch (e) {
      // 作錯誤處理
      console.log(e)
      setError(e.message)
    }
  }

  const spinner = (
    <div className='mapSpinner'>
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  useEffect(() => {
    setIsLoading(true)
    // 向伺服器要求get資料
    fetchData()
  }, [])

  // 自動於x秒後關掉指示動畫
  useEffect(() => {
    // 如果是true(有呈現的情況)
    if (isLoading) {
      // 關起載入指示動畫(延後1.5秒關閉)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }, [isLoading])
  
  return(
    <>
      <Navbar/>
      <div className="mapAndCardWrap">
        <div>

          {/* 搜尋框 */}
          <StoreCardSearch
            setIsLoading={setIsLoading}
            fetchFilterData={fetchFilterData}
          />
          
          {/* 門市卡片 */}
          {isLoading ? spinner :
            <StoreCardWrap
              data={data}
              setCenter={setCenter}
              setZoom={setZoom}
            />
          }
        </div>
        
        {/* 地圖 */}
        <div className="mapWrap">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }}
            center={center}
            zoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map }) => {
              mapRef.current = map;
              console.log(mapRef.current);
            }}
            // onChange={({ zoom, bounds }) => {
            //   console.log('移動了地圖');
            //   setZoom(zoom);
            //   setCenter([
            //     bounds.nw.lng,
            //     bounds.se.lat,
            //     bounds.se.lng,
            //     bounds.nw.lat
            //   ]);
            // }}
            onChildClick={(key) => console.log(key, 'haha')}
          >
            {/* 地圖地點的mark */}
            {/* {data.map((latlng, i)=>{
              let thisLat = Number(latlng.lat);
              let thisLng = Number(latlng.lng);
              return(
                <StoreMarker
                  key={i}
                  lat={thisLat}
                  lng={thisLng}
                  text="哈哈"
                  // onClick={handleMarkerClick(i)}
                />
              )
            })} */}
            <StoreMarker
                  lat={24.9725821}
                  lng={121.5297745}
                  text="哈哈"
                  // onClick={handleMarkerClick(i)}
                />
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}

export default StoreMapCardWrap