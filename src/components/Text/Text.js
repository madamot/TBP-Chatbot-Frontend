import React from 'react';


import "../../index.css"



export default function Text({ message: { id, title, platform, author, date, user }, onArchiveTask, onPinTask }) {
  return (
    <div>

      <div className={`message ${platform} ${author}`}>
        <div className="content">
          {
            (platform === 'teams')
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
