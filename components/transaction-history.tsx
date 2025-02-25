import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

const transactions = [
  {
    id: 1,
    type: "receive",
    amount: "0.5 BTC",
    value: "$20,000",
    date: "2024-02-25",
    status: "Confirmed",
  },
  {
    id: 2,
    type: "send",
    amount: "2.5 ETH",
    value: "$5,200",
    date: "2024-02-24",
    status: "Confirmed",
  },
  {
    id: 3,
    type: "receive",
    amount: "1.2 BTC",
    value: "$48,000",
    date: "2024-02-23",
    status: "Confirmed",
  },
]

export function TransactionHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-full p-2 ${
                    transaction.type === "receive" ? "bg-emerald-100 text-emerald-500" : "bg-red-100 text-red-500"
                  }`}
                >
                  {transaction.type === "receive" ? (
                    <ArrowDownIcon className="h-4 w-4" />
                  ) : (
                    <ArrowUpIcon className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <div className="font-medium">
                    {transaction.type === "receive" ? "Received" : "Sent"} {transaction.amount}
                  </div>
                  <div className="text-sm text-muted-foreground">{transaction.date}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{transaction.value}</div>
                <div className="text-sm text-muted-foreground">{transaction.status}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

