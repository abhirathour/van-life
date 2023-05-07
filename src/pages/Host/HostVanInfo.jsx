import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const [currVan] = useOutletContext();
  return (
    <div>
      <h4>
        <span>Name: </span>
        {currVan.name}
      </h4>
      <h4 className="mt-4">
        <span>Category: </span>
        {currVan.type}
      </h4>
      <p className="mt-4 fs-4">
        Description: <span className="lead">{currVan.description}</span>
      </p>
      <h4 className="mt-4">
        <span>Visibility: </span>public
      </h4>
    </div>
  );
}
