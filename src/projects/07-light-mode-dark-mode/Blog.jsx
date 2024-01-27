import { useContext } from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';
import { ThemeContext, themes } from './context/theme-context';

function Blog() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  //const toggleTheme = () => theme === 'dark' ? 'light' : 'dark';

  return (
    <div className="container p-1 relative">
      <Title text={`My Blog with ${theme} theme`} />
      <span style={{ position: 'absolute', top: 10, right: 10}}>
        <Button
          text={`Swap to ${themes[theme === themes.dark ? 'light' : 'dark']} theme`}
          onClick={() => toggleTheme(theme)}
          classes={theme === themes.dark ? 'btn-light' : 'btn-dark'}
        />
      </span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, consectetur culpa ea et facere ipsa quas repellat reprehenderit saepe sunt suscipit, unde. Culpa dicta numquam placeat, rerum saepe tenetur voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa error fugiat minima necessitatibus nisi unde voluptatem. Culpa debitis distinctio dolorum eaque esse eveniet incidunt nihil nostrum obcaecati repudiandae, rerum voluptas!</p>
    </div>
  );
}

export default Blog;