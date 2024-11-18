import EnrollmentTable from "./sections/enrollment-table";
import { EnrollmentFilter } from "./sections/filter-section";
import { EnrollmentHeader } from "./sections/header-section";

export default function EnrollmentPage() {

  return (
    <>
      <EnrollmentHeader />
      <EnrollmentFilter />
      <EnrollmentTable />
    </>
  )
}
