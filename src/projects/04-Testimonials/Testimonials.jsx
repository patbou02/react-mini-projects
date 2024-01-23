import Button from '../../components/Button';
import Title from '../../components/Title';
import { LiaCommentSolid } from "react-icons/lia";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function Testimonials() {

  const handlePostsButtonClick = () => console.log('clicked the posts button');
  const handleUsersButtonClick = () => console.log('clicked the users button');
  const handleCommentsButtonClick = () => console.log('clicked the comments button');

  return (
    <div className="container m-auto">
      <Title text="Testimonials" />
      <Button onClick={handlePostsButtonClick} icon={<MdOutlinePostAdd />} classes="btn-primary" text="Posts" />
      <Button onClick={handleUsersButtonClick} icon={<FaRegUser />} classes="btn-info" text="Users" />
      <Button onClick={handleCommentsButtonClick} icon={<LiaCommentSolid />} classes="btn-success" text="Comments" />
    </div>
  );
}

export default Testimonials;