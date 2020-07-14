import React from 'react';

import "../../index.css"

export default function Text({ message: { id, title, state, author, date, user }, onArchiveTask, onPinTask }) {
  return (
    <div className="messages">
      <div className={`message ${state} ${author}`}>
        <div className="content">
          {
            (state === 'teams')
              ? <div className="top-row">
                <div className="time">
                  {date}
                </div>
              </div>
              : null
          }
          <div>
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
