import { useParams } from 'react-router-dom';

export default function Collection() {
  const { id } = useParams();
  return <h1>Curated Collection: {id}</h1>;
}