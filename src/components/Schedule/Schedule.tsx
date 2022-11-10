import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import * as S from './Schedule.styles';

const Schedule = () => {
  return (
    <S.Root>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<div />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<div />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<div />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<div />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<div />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </S.Root>
  );
};

export default Schedule;
