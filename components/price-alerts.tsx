import { Badge } from "@/components/ui/badge"

const alerts = [
  {
    asset: "BTC",
    condition: "above",
    price: "$48,000",
    status: "active",
  },
  {
    asset: "ETH",
    condition: "below",
    price: "$2,500",
    status: "triggered",
  },
]

export function PriceAlerts() {
  return (
    <div className="space-y-2">
      {alerts.map((alert, index) => (
        <div key={index} className="flex items-center justify-between p-2 rounded-lg text-sm">
          <div className="flex items-center gap-2">
            <Badge variant={alert.status === "active" ? "default" : "secondary"}>{alert.asset}</Badge>
            <span>
              {alert.condition} {alert.price}
            </span>
          </div>
          <Badge variant={alert.status === "active" ? "outline" : "secondary"}>{alert.status}</Badge>
        </div>
      ))}
    </div>
  )
}

