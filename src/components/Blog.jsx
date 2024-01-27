import Title from '../components/Title';
import Button from '../components/Button';

function Blog({theme}) {
  return (
    <div className="container p-1 relative">
      <Title text={`My Blog with ${theme} theme`} />
      <span style={{ position: 'absolute'}}>
        <Button text="Swap theme" />
      </span>
    </div>
  );
}

export default Blog;