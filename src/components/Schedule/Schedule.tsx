import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import * as S from './Schedule.styles';
import './Schedule.css';

const Schedule = () => {
  const bag = (
    <span className="vertical-timeline-element-icon bounce-in">
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
  );

  const star = (
    <span className="vertical-timeline-element-icon bounce-in">
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
  );

  const bachelorCap = (
    <span className="vertical-timeline-element-icon bounce-in">
      <svg
        className="MuiSvgIcon-root"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
  );

  return (
    <S.Root>
      <VerticalTimeline lineColor="rgba(33, 150, 243, 0.5)" animate={false}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'linear-gradient(to bottom, #5591ea, #5bc3dd)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="13:00 ~ 13:30"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={bag}
        >
          <h3 className="vertical-timeline-element-title">홈커밍 시작</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            <div>홈커밍 행사에 대한 간단한 설명</div>
            <div>2022년 WAP의 동아리 활동 보고</div>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'linear-gradient(to bottom, rgb(233,33,90), #f07497)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 33, 90)' }}
          date="13:30 ~ 15:30"
          iconStyle={{ background: 'rgb(233, 33, 90)', color: '#fff' }}
          icon={bachelorCap}
        >
          <h3 className="vertical-timeline-element-title">홈커밍 특별 강연</h3>
          <p>
            <div>1. 조정범 ‘게임 업계 취준하기’</div>
            <div style={{ textAlign: 'right' }}>(13:30 ~ 14:00)</div>
            <div>2. 김한준 ’내가 스타트업에서 개발자로 일하는 이유’</div>
            <div style={{ textAlign: 'right' }}>(14:10 ~ 14:40)</div>
            <div>3. 정상우 ‘게임얘기만 하던놈 근황’</div>
            <div style={{ textAlign: 'right' }}>(14:50 ~ 15:20)</div>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'linear-gradient(to bottom, #5591ea, #5bc3dd)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="15:30 ~ 16:30"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={bag}
        >
          <h3 className="vertical-timeline-element-title">자유시간</h3>
          <p>
            <div>
              선배님들께 궁금한 것들을 포스트잇에 적어서 칠판에 붙여주세요!
            </div>
            <div>
              보드게임, 간식 그리고 선후배 교류를 위한 이벤트를 준비했습니다!
            </div>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'linear-gradient(to bottom, #5591ea, #5bc3dd)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="16:30 ~ 17:15"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={bag}
        >
          <h3 className="vertical-timeline-element-title">Q&A</h3>
          <p>포스트잇 질문에 대한 답변 시간</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'linear-gradient(to bottom, #5591ea, #5bc3dd)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="17:15 ~ 17:30"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={bag}
        >
          <h3 className="vertical-timeline-element-title">홈커밍 종료</h3>
          <p>경품 추첨 및 기념사진 촬영</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={star}
        />
      </VerticalTimeline>
    </S.Root>
  );
};

export default Schedule;
