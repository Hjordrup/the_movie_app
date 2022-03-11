const MovieCard = (props) => {
  return (
    <>
      <div className="card" style={{ minWidth: '250px' }}>
        <img
          src={`http://image.tmdb.org/t/p/w500/${props.img}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
