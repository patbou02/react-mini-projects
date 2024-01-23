import Button from '../../components/Button';
import Title from '../../components/Title';
import { LiaCommentSolid } from "react-icons/lia";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function Testimonials() {
  return (
    <div className="container m-auto">
      <Title text="Testimonials" />
      <Button icon={<MdOutlinePostAdd />} classes="btn-primary" text="Posts" />
      <Button icon={<FaRegUser />} classes="btn-info" text="Users" />
      <Button icon={<LiaCommentSolid />} classes="btn-success" text="Comments" />
    </div>
  );
}

export default Testimonials;