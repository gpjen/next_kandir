import { useRouter } from "next/router"

export default function KaryawanId() {
    const router = useRouter()
    const {page = 0, limit = 0, karyawanId} = router.query
  return (
    <div>
        <h2>THIS IS DYNAMIC ROUTE KARYAWAN ID : {karyawanId}</h2>
        <p>Page = {page}</p>
        <p>limit = {limit}</p>
    </div>
  )
}
