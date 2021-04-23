import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../auth';
import { useProtectedResource, postWithCredentials } from '../data';
import { MessagesList } from '../messages';
import { RequestsList } from '../requests';

export const GroupPage = () => {
  const [messageValue, setMessageValue] = useState('');
  const { id } = useParams();
  const { user } = useUser();
  const { data: group, setData: setGroup } = 
    useProtectedResource(`/groups/${id}`, { owner: {}, messages: [], requests: [], });

  console.log(group);
  
  return (
    <div className="centered-container">
      <h1>{group.name}</h1>
      <p>Owned by: {group.owner.fullName}</p>
      <MessagesList messages={group.messages} />
      <div className="new-message-form">
        <input
          type="text"
          placeholder="Type your message here..."
          value={messageValue}
          onChange={e => setMessageValue(e.target.value)} />
        <button>Submit</button>
      </div>
    </div>
  )
}