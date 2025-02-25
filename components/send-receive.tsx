import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { QrCode, Send } from "lucide-react"

export function SendReceive() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Crypto</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="asset">Select Asset</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select cryptocurrency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                <SelectItem value="eth">Ethereum (ETH)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Recipient Address</Label>
            <div className="flex gap-2">
              <Input id="address" placeholder="Enter wallet address" />
              <Button variant="outline" size="icon">
                <QrCode className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" type="number" placeholder="0.00" />
            <div className="text-sm text-muted-foreground">Available: 2.30 BTC</div>
          </div>

          <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
            <Send className="mr-2 h-4 w-4" />
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

