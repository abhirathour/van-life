import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const [currVan] = useOutletContext();
  return (
    <div>
      <span className="fs-3">${currVan.price}.00</span>/day
    </div>
  );
}
