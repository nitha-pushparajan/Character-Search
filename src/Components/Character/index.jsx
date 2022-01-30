function Character(props) {
  return (
    <li>
      <a href={`/${props.id}`}>
        <img src={props.image} alt={props.name} />
        <div className="character-name">
          <h2>{props.name}</h2>
        </div>
      </a>
      {props.showDetails && (
        <div className="character-detail-info">
          <h2>Know More About {props.name}</h2>
          <p>Gender: {props.gender}</p>
          <p>Species:{props.species}</p>
          <p>Status: {props.Status}</p>
          <p>Origin: {props.origin && props.origin.name}</p>
          <p>Location: {props.location && props.location.name}</p>
          <div>
            Episodes:
            <ul>
              {props.episode &&
                props.episode.map((data) => (
                  <li key={data.episode}>
                    {data.episode}: {data.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

export default Character;
