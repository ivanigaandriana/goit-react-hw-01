
 import FriendListItem from "./FriendsListItem";
 import css from "./FriendsList.module.css";
 const FriendsList = ({friends}) =>{
    return(
        <ul className={css.friendList}>
        {friends.map(friend => (
          <li className={css.friendListItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    );
 };
 export default FriendsList;