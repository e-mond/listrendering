import React from 'react';


const Book = ({title, author, publishedYear }) => {
return (
<div>
<h3>Title: {title}</h3>
<p>Author: {author}</p>
<p>Published Year: {publishedYear}</p>
<hr />
</div>
    );
};
export default Book;