 import css from './FriendsListItem.module.css'
 const FriendListItem = ({avatar, name, isOnline}) =>{
    return (
        <div className={css.friendListItemContainer}>
  <img src={avatar} alt="Avatar" width="48" />
  <p> {name}</p>
  <p className={isOnline ? css.online : css.offline}> {isOnline ? "Online" :"Offline"}</p>
</div>
    );
 }
 export default FriendListItem;