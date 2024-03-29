import Modal from "react-modal";
import styles from "../css/modal/FollowingModal.module.css";
import { useNavigate } from "react-router-dom";

function FollowingModal({ isOpen, onCancle, followingList, myProfileId }) {
  const navigate = useNavigate();
  const onCanclehandle = () => {
    onCancle();
  };
  const nickname = localStorage.getItem("nickname");
  return (
    <Modal
      className={styles["Following-content"]}
      overlayClassName={styles["Following-overlay"]}
      isOpen={isOpen}
      onRequestClose={onCanclehandle}
    >
      <div className={styles.ListTitle}>팔로잉</div>
      <div className={styles.followingListWrap}>
        {followingList.map((following) => (
          <div
            key={following.nickname}
            className={styles.followingWrap}
            onClick={() => {
              if (nickname === following.nickname) {
                navigate("/mybook");
              } else {
                navigate(`/subuserbook/${following.profileId}`);
                onCancle();
              }
            }}
          >
            <span>{following.intro}</span>
            <span>{following.nickname}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
}
export default FollowingModal;
