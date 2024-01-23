import Button from '../../components/Button';
import Title from '../../components/Title';
import { LiaCommentSolid } from "react-icons/lia";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useState, useEffect } from 'react';

function Testimonials() {

  const [contentType, setContentType] = useState(null);

  const API_REQUEST = `https://jsonplaceholder.typicode.com/${contentType}`;

  useEffect(() => {
    fetch(API_REQUEST).then(response => response.json()).then(json => console.log(json));
  }, [ contentType ]);
  
  const handlePostsButtonClick = () => setContentType('posts');
  const handleUsersButtonClick = () => setContentType('users');
  const handleCommentsButtonClick = () => setContentType('comments');

  return (
    <div className="container m-auto">
      <Title text="Testimonials" />
      <Button onClick={handlePostsButtonClick} icon={<MdOutlinePostAdd />} classes="btn-primary" text="Posts" />
      <Button onClick={handleUsersButtonClick} icon={<FaRegUser />} classes="btn-info" text="Users" />
      <Button onClick={handleCommentsButtonClick} icon={<LiaCommentSolid />} classes="btn-success" text="Comments" />
      <Title text={contentType ? (contentType.charAt(0).toUpperCase() + contentType.substring(1)) : 'Select from above'} classes="subtitle text-primary" />
      {contentType && (
        <div>{contentType}</div>
      )}

    </div>
  );
}

export default Testimonials;