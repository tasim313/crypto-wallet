"use client"

import type React from "react"

import { useState } from "react"
import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BitcoinIcon, TrendingUpIcon, AlertCircle, Wallet, ArrowLeftRight } from "lucide-react"
import { TransactionHistory } from "@/components/transaction-history"
import { MarketTrends } from "@/components/market-trends"
import { PriceAlerts } from "@/components/price-alerts"
import { QuickSwap } from "@/components/quick-swap"
import { Progress } from "@/components/ui/progress"

const data = [
  { date: "Jan", value: 2000, eth: 1800, btc: 2200 },
  { date: "Feb", value: 2300, eth: 2100, btc: 2400 },
  { date: "Mar", value: 2100, eth: 1900, btc: 2300 },
  { date: "Apr", value: 2800, eth: 2600, btc: 3000 },
  { date: "May", value: 2700, eth: 2500, btc: 2900 },
  { date: "Jun", value: 3000, eth: 2800, btc: 3200 },
  { date: "Jul", value: 2850, eth: 2650, btc: 3050 },
]

const portfolioDistribution = [
  { asset: "Bitcoin", value: 45, color: "var(--bitcoin)" },
  { asset: "Ethereum", value: 35, color: "var(--ethereum)" },
  { asset: "Other", value: 20, color: "var(--other)" },
]

export function WalletDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [timeframe, setTimeframe] = useState("1W")

  return (
    <div className="lg:ml-72">
      {" "}
      {/* Offset for sidebar */}
      <div className="grid gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex gap-2">
              {["1D", "1W", "1M", "1Y", "ALL"].map((tf) => (
                <Button
                  key={tf}
                  variant={timeframe === tf ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeframe(tf)}
                >
                  {tf}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$22,550.00</div>
                <div className="flex items-center gap-1 text-emerald-500">
                  <TrendingUpIcon className="h-4 w-4" />
                  <span className="text-sm">+12.5%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Bitcoin</CardTitle>
                <BitcoinIcon className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.30 BTC</div>
                <div className="text-sm text-muted-foreground">≈ $45,200.00</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Quick Swap</CardTitle>
                <ArrowLeftRight className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <QuickSwap />
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Price Alerts</CardTitle>
                <AlertCircle className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <PriceAlerts />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="value" stroke="#10B981" fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portfolio Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolioDistribution.map((item) => (
                    <div key={item.asset} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.asset}</span>
                        <span className="text-sm text-muted-foreground">{item.value}%</span>
                      </div>
                      <Progress
                        value={item.value}
                        className="h-2"
                        style={
                          {
                            "--progress-background": item.color,
                          } as React.CSSProperties
                        }
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Market Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <MarketTrends />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <TransactionHistory limit={5} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

