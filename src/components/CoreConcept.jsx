export default function CoreConcept(concept) {
  return (
    <li>
      <img src={concept.image} alt={concept.title}></img>
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  );
}
