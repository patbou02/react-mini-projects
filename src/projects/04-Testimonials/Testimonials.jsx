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

  const renderedItems = contentItems?.map(item => {
    if (contentType === 'posts') {
      return (
        <li key={item.id}>
          <div className="card card-primary mb-2">
            <strong>{item.title}</strong>: {item.body}
          </div>
        </li>);
    } else if (contentType === 'users') {
      return (
        <li key={item.id}>
          <div className="card card-primary mb-2">
            <strong>{item.name}</strong><br />Email: {item.email}<br />Telephone: {item.phone}
          </div>
        </li>
      );
    } else {
      return (
        <li key={item.id}>
          <div className="card card-primary mb-2">
            <strong>{item.name}</strong><br />{item.body}
          </div>
        </li>
      );
    }
  });

  return (
    <div className="container m-auto">
      <Title text="Testimonials" />
      <Button onClick={handlePostsButtonClick} icon={<MdOutlinePostAdd />} classes="btn-primary" text="Posts" />
      <Button onClick={handleUsersButtonClick} icon={<FaRegUser />} classes="btn-info" text="Users" />
      <Button onClick={handleCommentsButtonClick} icon={<LiaCommentSolid />} classes="btn-success" text="Comments" />
      <Title text={contentType ? (contentType.charAt(0).toUpperCase() + contentType.substring(1)) : 'Select from above'} classes="subtitle text-primary" />
      {renderedItems && (
        <ul>{renderedItems}</ul>
      )}

    </div>
  );
}

export default Testimonials;