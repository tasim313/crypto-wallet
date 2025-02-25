import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDownIcon } from "lucide-react"

export function QuickSwap() {
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <Select defaultValue="btc">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="btc">BTC</SelectItem>
            <SelectItem value="eth">ETH</SelectItem>
            <SelectItem value="usdt">USDT</SelectItem>
          </SelectContent>
        </Select>
        <Input type="number" placeholder="0.00" className="w-full" />
      </div>
      <div className="flex justify-center">
        <Button variant="ghost" size="icon">
          <ArrowDownIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-1">
        <Select defaultValue="eth">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="btc">BTC</SelectItem>
            <SelectItem value="eth">ETH</SelectItem>
            <SelectItem value="usdt">USDT</SelectItem>
          </SelectContent>
        </Select>
        <Input type="number" placeholder="0.00" className="w-full" readOnly />
      </div>
    </div>
  )
}

