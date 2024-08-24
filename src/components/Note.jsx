import PropTypes from 'prop-types'

export default function Note (props) {
  return (
    <div className="noteContainer">
      <div className='appNote'>
        <p className="noteTitle">{props.title}</p>
        <p className="noteContent">{props.content}</p>
      </div>
    </div>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

