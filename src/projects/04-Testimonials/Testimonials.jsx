import Button from '../../components/Button';
import Title from '../../components/Title';
import { LiaCommentSolid } from "react-icons/lia";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useState, useEffect } from 'react';

function Testimonials() {

  const [contentType, setContentType] = useState(null);
  const [contentItems, setContentItems] = useState();

  const API_REQUEST = `https://jsonplaceholder.typicode.com/${contentType ?? 'todos'}`;

  useEffect(() => {
    fetch(API_REQUEST)
      .then(response => response.json())
      .then(json => setContentItems(json));
  }, [ contentType ]);

  const handlePostsButtonClick = () => setContentType('posts');
  const handleUsersButtonClick = () => setContentType('users');
  const handleCommentsButtonClick = () => setContentType('comments');

  const ContentWrapper = ({ name, title, body, email }) => {
    return (
      <div className="card card-primary mb-2">
        {name && <h2 className="card-header">{name}</h2>}
        <div className="card-body">
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        {email && <h2 className="card-footer">{email}</h2>}
      </div>
    );
  };

  const renderedItems = contentItems?.map(item => {
    if (contentType === 'posts') {
      return <ContentWrapper key={item.id} title={item.title} body={item.body} />;
    } else if (contentType === 'users') {
      return <ContentWrapper key={item.id} name={item.name} body={item.body} email={item.email} />;
    } else {
      return <ContentWrapper key={item.id} name={item.name} body={item.body} />;
    }
  });

  return (
    <div className="container m-auto">
      <Title text="Testimonials" />
      <Button onClick={handlePostsButtonClick} icon={<MdOutlinePostAdd />} classes="btn-primary" text="Posts" />
      <Button onClick={handleUsersButtonClick} icon={<FaRegUser />} classes="btn-info" text="Users" />
      <Button onClick={handleCommentsButtonClick} icon={<LiaCommentSolid />} classes="btn-success" text="Comments" />
      <Title text={contentType ? (contentType.charAt(0).toUpperCase() + contentType.substring(1)) : 'Select from above'} classes="subtitle text-primary" />
      {renderedItems}
    </div>
  );
}

export default Testimonials;