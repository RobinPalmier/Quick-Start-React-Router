import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Article = () => {
    const { id, title } = useParams();
    
    return (
        <>
            {
                isNaN(id)
                ? <h3>Choississez un article</h3>
                : <h3>Article n°{id} : {title}</h3>
            }

          <Link to="/article/1/emmet">Article 1</Link>
          <Link to="/article/2/dolor-sit">Article 2</Link>
          <Link to="/article/3/lorem-ipsum">Article 3</Link>
        </>
      );
}

export default Article;