import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { reclutamientoBreadcrumb } from "./data/breadcrumb";

export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={reclutamientoBreadcrumb} />
    </div>
  );
}
