/*global kakao*/
import * as S from './Map.styles';
import { Map as KakaoMap, MapMarker } from 'react-kakao-maps-sdk';

const Location = () => {
  return (
    <S.Root>
      <S.Title>장소: 부경대학교 창의관 303호</S.Title>
      <S.Container>
        <KakaoMap
          center={{ lat: 35.13277, lng: 129.106902 }}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          level={4}
          draggable={false}
          zoomable={false}
        >
          <MapMarker position={{ lat: 35.13277, lng: 129.106902 }} />
        </KakaoMap>
      </S.Container>
    </S.Root>
  );
};

export default Location;
