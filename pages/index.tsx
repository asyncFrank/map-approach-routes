
import {useLoadScript} from '@react-google-maps/api'
import Map from "../components/map";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyALgPoq4QnDlURKYhjyCse5cFv7YSjRarE',
    libraries: ["places"],
  });

  if (!isLoaded) return( <div>Loading...</div>);
  return <Map />;
}
