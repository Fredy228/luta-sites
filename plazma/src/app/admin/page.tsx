import dynamic from "next/dynamic";

const Admin = dynamic(() => import("@/admin/admin-page"), {
  ssr: false,
});

export default function AdminPage() {
  return <Admin />;
}
