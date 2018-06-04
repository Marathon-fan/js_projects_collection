

const Comment = (props) => (
   <div className="comment">
       <h2 className="commentAuthor">
           { props.author }
       </h2>
       { props.children }
   </div>
 );
ReactDOM.render(
    <Comment author="Cory">
        So, what do you think so far?
    </Comment>,
    document.querySelector('#content')
);


