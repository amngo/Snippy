import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

const Link = ({ date_created, url, id, handleRemove, visits }) => {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-content'>
          <div className='content'>
            <p>
              <small className='is-uppercase has-text-grey'>
                Created on {moment(date_created).format('MMM DD YYYY, h:mm a')}
              </small>
              <br />
              <span className='has-text-primary is-size-4 has-text-weight-light'>
                {url}
              </span>
              <br />
              <a
                href={`${window.location.origin}/${id}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <small className='has-text-link'>{`${window.location.origin}/${id}`}</small>
              </a>
            </p>
          </div>
        </div>
        <div className='media-right'>
          <button
            onClick={() => handleRemove(id)}
            className='delete is-medium'
          ></button>
        </div>
      </article>
    </div>
  );
};

const mapStateToProps = state => ({
  remove_link_pending: state.link.remove_link_pending
});

export default connect(mapStateToProps)(Link);
