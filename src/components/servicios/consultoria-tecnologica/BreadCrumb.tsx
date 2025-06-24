import Breadcrumb from "@/components/ui/CustomBreadcrumb";
import { consultoriaBreadcrumb } from "./data/breadcrumb";



export default function Breadcrumbs() {
  return (
    <div className="w-full">
      <Breadcrumb items={consultoriaBreadcrumb} />
    </div>
  );
}
