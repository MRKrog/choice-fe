import React from 'react';

const NoteTab = (props) => {
  const { title, copy} = props;
  return (
    <div className='NoteTab'>
      <section className="noteStatus">
        <span className="currentStatus"></span>
      </section>
      <section className="notePreview">
        <h5>{title}</h5>
        <p>{copy}</p>
      </section>
    </div>
  )
}

export default NoteTab;
