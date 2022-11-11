/*global kakao*/
import * as S from './Map.styles';
import { Map as KakaoMap, MapMarker } from 'react-kakao-maps-sdk';

const Location = () => {
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
