import Title from '../../components/Title';
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaFaceSmile, FaHeart, FaRegHeart } from "react-icons/fa6";

export default function LikeMyPhoto() {
  return (
    <div className="container">
      <Title text="Like My Photo" />
      <Title classes="subtitle text-center" text="Likes" />
      <div className="card card-dark m-auto" style={{ width: 300, cursor: 'pointer'}}>
        <div className="card-header fs-xl d-flex" style={{ justifyContent: 'space-between'}}>
          <FaFaceSmile className="mr-2" />
          <small>Doggy</small>
        </div>
        <img src="#" style={{ height: "fit"}} />
        <div className="card-footer fs-xl d-flex" style={{ justifyContent: 'space-between'}}>
          <IoChatbubblesSharp />
          <FaRegHeart />
          <FaHeart />
        </div>
      </div>
    </div>
  );
}