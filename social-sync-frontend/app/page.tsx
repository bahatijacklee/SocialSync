import { redirect } from "next/navigation"

// Redirect to dashboard by default
export default function Home() {
  redirect("/dashboard")
}

