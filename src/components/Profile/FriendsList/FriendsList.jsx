 import css from "./FriendsList.module.css"
 const FriendListItem = ({avatar, name, isOnline}) =>{
    return (
        <div className={css.friendListItemContainer}>
  <img src={avatar} alt="Avatar" width="48" />
  <p> {name}</p>
  <p className={isOnline ? css.online : css.offline}> {isOnline ? "Online" :"Offline"}</p>
</div>
    );
 };
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