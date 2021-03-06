import React from 'react';
import _ from 'lodash';

const CourseListItem = ({
  removeClass,
	courseId,
	courseData,
	color,
	anchors,
	...other
}) => {

  var rgb = (color) ? 'rgb(' + color + ')' : 'rgb(251,192,45)';

  if (_.isUndefined(courseData)) {
    return (
      <li key={courseId} {...other} style={{ backgroundColor: rgb }}>
        Loading {courseId}...
      </li>
    );
  } else {
    return (
      <li key={courseId} {...other} style={{ backgroundColor: rgb }}>
        <a className='close' onClick={e => removeClass(courseId)}>×</a>
        <span className='courseid'>{courseId}</span>
        <span className='unit tag'>{courseData.units} units</span>
        <span className='courseTitle'>{courseData.title}</span>
        {(() => {
          if (anchors.length > 0) {
            return(
              <span className='anchors'>⚓ {anchors.join(', ')}</span>
            );
          }
        })()}
      </li>
    );
  }

};

CourseListItem.propTypes = {
  removeClass: React.PropTypes.func,
  courseId: React.PropTypes.string.isRequired,
  anchors: React.PropTypes.arrayOf(React.PropTypes.string),
  color: React.PropTypes.arrayOf(React.PropTypes.number),
  courseData: React.PropTypes.object
};

export default CourseListItem;
