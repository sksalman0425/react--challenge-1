import { getImageUrl } from './Utils.js';

export default function Profile({ person, imageSize = 70 }) {
   //remember below function is normal JS function as it not return HTML/UI
    const imageSrc = getImageUrl(person)
  
    return (
      <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={imageSrc}
          alt={person.name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li>
            <b>Profession:</b> {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards.length} </b>
            ({person.awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovery}
          </li>
        </ul>
      </section>
    )
  }