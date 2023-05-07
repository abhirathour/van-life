import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const [currVan] = useOutletContext();
  return <img src={currVan.imageUrl} width={200} className="rounded" />;
}
