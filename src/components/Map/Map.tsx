/*global kakao*/
import { useEffect } from 'react';
import * as S from './Map.styles';

const Location = () => {
  const { kakao } = window;

  useEffect(() => {
    var container = document.getElementById('map');
    var markerPosition = new kakao.maps.LatLng(
      35.13277828293117,
      129.1069024840455,
    );

    var options = {
      center: markerPosition,
      level: 4,
    };
    var map = new kakao.maps.Map(container, options);

    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, []);

  return (
    <S.Root>
      <div
        id="map"
        style={{ width: '500px', height: '300px', borderRadius: '40px' }}
      ></div>
    </S.Root>
  );
};

export default Location;
