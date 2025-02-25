import Link from "next/link"
import { BarChart3, Wallet, ArrowLeftRight, Clock, Star, Newspaper, Settings } from "lucide-react"

const navigation = [
  { name: "Dashboard", icon: BarChart3, href: "/" },
  { name: "Wallet", icon: Wallet, href: "/wallet" },
  { name: "Swap", icon: ArrowLeftRight, href: "/swap" },
  { name: "History", icon: Clock, href: "/history" },
  { name: "Watchlist", icon: Star, href: "/watchlist" },
  { name: "News", icon: Newspaper, href: "/news" },
]

export function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6 pb-4">
        <div className="h-16" /> {/* Spacer for header */}
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <item.icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <Link
                href="/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

