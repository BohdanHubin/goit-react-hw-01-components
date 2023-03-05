import PropTypes from 'prop-types';
import FriendListCard from './FriendListCard';

export default function FriendList ({ friends }) {
    return (
        <ul className="list">
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListCard key={id} isOnline={isOnline} avatar={avatar} name={name}/>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};


