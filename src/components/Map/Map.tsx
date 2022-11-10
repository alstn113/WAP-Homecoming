/*global kakao*/
import { useEffect } from 'react';
import * as S from './Map.styles';
import { Map as KakaoMap, MapMarker } from 'react-kakao-maps-sdk';

const Location = () => {
  // const { kakao } = window;

  // useEffect(() => {
  //   var container = document.getElementById('map');
  //   var markerPosition = new kakao.maps.LatLng(
  //     35.13277828293117,
  //     129.1069024840455,
  //   );

  //   var options = {
  //     center: markerPosition,
  //     level: 4,
  //   };
  //   var map = new kakao.maps.Map(container, options);

  //   var marker = new kakao.maps.Marker({
  //     position: markerPosition,
  //   });

  //   // 마커가 지도 위에 표시되도록 설정합니다
  //   marker.setMap(map);
  // }, []);

  return (
    <S.Root>
      <KakaoMap
        center={{ lat: 35.13277, lng: 129.106902 }}
        style={{ width: '100%', height: '360px' }}
        level={4}
        draggable={false}
      >
        <MapMarker position={{ lat: 35.13277, lng: 129.106902 }} />
      </KakaoMap>
    </S.Root>
  );
};

export default Location;
