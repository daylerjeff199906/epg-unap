import { Metadata } from "next"
import { StudentsListPage } from "@/modules/academic/pages/students"

export const metadata: Metadata = {
  title: 'Academics',
}

export default function Page() {
  return (
    <div>
      <StudentsListPage/>
    </div>
  )
}