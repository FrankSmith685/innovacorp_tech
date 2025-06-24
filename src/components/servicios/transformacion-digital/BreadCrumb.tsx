import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { transformacionBreadcrumb } from "./data/breadcrumb";



export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={transformacionBreadcrumb} />
    </div>
  );
}
