import { TrendingUp, TrendingDown } from "lucide-react"

const trends = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$45,232.12",
    change: "+5.26%",
    trending: "up",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,832.51",
    change: "+3.12%",
    trending: "up",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$1.23",
    change: "-0.85%",
    trending: "down",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$98.45",
    change: "+8.56%",
    trending: "up",
  },
]

export function MarketTrends() {
  return (
    <div className="space-y-4">
      {trends.map((coin) => (
        <div
          key={coin.symbol}
          className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              {coin.symbol.charAt(0)}
            </div>
            <div>
              <div className="font-medium">{coin.name}</div>
              <div className="text-sm text-muted-foreground">{coin.symbol}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">{coin.price}</div>
            <div className={`text-sm ${coin.trending === "up" ? "text-emerald-500" : "text-red-500"}`}>
              {coin.trending === "up" ? (
                <TrendingUp className="inline h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="inline h-4 w-4 mr-1" />
              )}
              {coin.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

