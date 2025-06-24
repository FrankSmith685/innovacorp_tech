import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { desarrolloSoftwareBreadcrumb } from "./data/breadcrumb";



export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={desarrolloSoftwareBreadcrumb} />
    </div>
  );
}
