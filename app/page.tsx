import Link from "next/link"
import { WalletDashboard } from "@/components/wallet-dashboard"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <WalletDashboard />
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Test 404 Page</h2>
            <Button asChild>
              <Link href="/non-existent-page">Go to Non-Existent Page</Link>
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}

