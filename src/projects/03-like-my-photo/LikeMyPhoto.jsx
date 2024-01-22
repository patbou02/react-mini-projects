import { useState } from 'react';
import Title from '../../components/Title';
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaFaceSmile, FaHeart, FaRegHeart } from "react-icons/fa6";
import Frenchie from '../../images/frenchie.webp';

export default function LikeMyPhoto() {

  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleHeartClick = () => {
    setLike(!like);
    setLikeCount(likeCount + (!like ? 1 : -1));
  }

  return (
    <div className="container">
      <Title text="Like My Photo" />
      <Title classes="subtitle text-center" text={`Likes: ${likeCount}`} />
      <div className="card card-dark m-auto shadow-md" style={{ width: 300}}>
        <div className="card-header fs-xl d-flex" style={{ justifyContent: 'space-between'}}>
          <FaFaceSmile className="mr-2" />
          <small>Frenchie</small>
        </div>
        <img src={Frenchie} style={{ height: "fit"}} />
        <div className="card-footer fs-xl d-flex" style={{ justifyContent: 'space-between'}}>
          <IoChatbubblesSharp />
          {like ? <FaHeart className="text-danger" style={{ cursor: 'pointer' }} onClick={handleHeartClick} /> : <FaRegHeart style={{ cursor: 'pointer' }} onClick={handleHeartClick} />}
        </div>
      </div>
    </div>
  );
}