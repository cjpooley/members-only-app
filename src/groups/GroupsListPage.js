import React from 'react';
import { Link } from 'react-router-dom';
import { GroupsList } from './GroupsList';
import { GroupsListItem } from './GroupsListItem';
import { MyGroupsListItem } from './MyGroupsListItem';
import { useGroups } from './useGroups';

export const GroupsListPage = () => {
  const { isLoading: isLoadingAllGroups, groups: allGroups } = useGroups();
  const userGroups = [];
  const notUserGroups = allGroups.filter(group => 
    userGroups.every(userGroup => userGroup.id !== group.id));

  return (
    <div className="centered-container">
      <h1 className="section-heading">My Groups</h1>
      <GroupsList
        isLoading={false}
        groups={userGroups}
        ListItemComponent={MyGroupsListItem} />
      <h1 className="section-heading">Other Groups</h1>
      <GroupsList
        isLoading={false}
        groups={notUserGroups}
        ListItemComponent={GroupsListItem} />
      <Link to="/create-group">
        <button>Create New Group</button>
      </Link>
    </div>
  );
}