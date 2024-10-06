'use server'
import { UserSearch } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet'
import saveSpot from '~/server/actions/save-spot'

const SpotModal = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="flex gap-2">
                    <UserSearch strokeWidth={1.5} /> Spot someone!
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <form action={saveSpot}>
                    <SheetHeader>
                        <SheetTitle>Spot someone!</SheetTitle>
                        <SheetDescription>
                            Describe the person you saw and why did they catch
                            your attention. Be respectful and kind. We're just
                            trying to spread some good vibes here.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="content" className="text-right">
                                Spot
                            </Label>
                            <Input
                                id="content"
                                name="content"
                                placeholder="Describe the person, situation, environment, etc..."
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="location" className="text-right">
                                Location
                            </Label>
                            <Input
                                id="location"
                                name="location"
                                placeholder="Amsterdam, The Netherlands"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Send</Button>
                        </SheetClose>
                    </SheetFooter>
                </form>
            </SheetContent>
        </Sheet>
    )
}

export default SpotModal
