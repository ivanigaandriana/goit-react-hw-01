import  css from"./Profile.module.css";
const Profile = ({name, tag, location, image, stats}) =>{
  return(
    <div className={css.profileContainer}>
  <div  className={css.profileContent} >
    <img  className={css.profileImage}
      src={image}
      alt="User avatar"
    />
    <p className={css.profileName}>{name}</p>
    <p className={css.profileTag}>@{tag}</p>
    <p  className={css.profileLocation}>{location}</p>
  </div>

  <ul className={css.profileList}>
    <li className={css.profileItem}>
      <span className={css.profileitemSpan1}>Followers</span>
      <span className={css.profileitemSpan2}>{stats.followers}</span>
    </li>
    <li  className={css.profileItem}>
      <span className={css.profileitemSpan1}>Views</span>
      <span className={css.profileitemSpan2}>{stats.views}</span>
    </li>
    <li  className={css.profileItem}>
      <span className={css.profileitemSpan1}>Likes</span>
      <span className={css.profileitemSpan2}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile;


  
 