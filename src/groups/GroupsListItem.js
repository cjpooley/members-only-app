import React from 'react';

export const GroupListItem = ({ group }) => (
  <div className="list-item">
    <div className="list-item-data">
      <h3>{group.name}</h3>
      <p>Owned by: {group.owner.fullName}</p>
      <p>{group.members.length} members</p>
    </div>
    <button>Ask to Join</button>
  </div>
);