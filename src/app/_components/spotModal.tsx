import { UserSearch } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

const SpotModal = () => {
  return (
	<Sheet>
      <SheetTrigger asChild>
			<Button className='flex gap-2'><UserSearch strokeWidth={1.5}/> Spot someone!</Button>
      </SheetTrigger>
      <SheetContent side='bottom'>
        <SheetHeader>
          <SheetTitle>Spot someone!</SheetTitle>
          <SheetDescription>
            Describe the person you saw and why did they catch your attention. Be respectful and kind. We're just trying to spread some good vibes here.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Spot
            </Label>
            <Input id="name" placeholder="Describe the person, situation, environment, etc..." className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Location
            </Label>
            <Input id="username" placeholder="Amsterdam, The Netherlands" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SpotModal