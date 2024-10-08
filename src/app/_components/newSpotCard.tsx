import saveSpot from '~/server/actions/save-spot'
import { SaveButton } from './save-button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card'
import { Input } from './ui/input'

const NewSpotCard = () => {
    return (
        <Card className="h-full flex flex-col border-violet-600 border-2 relative">
            <span className="pt-2 pl-4 text-lg font-semibold">New spot</span>
            <form action={saveSpot}>
                <CardHeader>
                    <CardDescription>
                        {/* <Label htmlFor="content" className="text-right">
                                Spot
                            </Label> */}
                        <Input
                            id="location"
                            name="location"
                            placeholder="Where?"
                            // className="col-span-3"
                        />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/* <Label htmlFor="content" className="text-right">
                                Location
                            </Label> */}

                    <CardDescription>
                        <Input
                            id="content"
                            name="content"
                            placeholder="Describe the person, situation, environment, etc..."
                            // className="col-span-3"
                        />
                    </CardDescription>
                    <div className="flex justify-end pt-4">
                        <SaveButton />
                    </div>
                </CardContent>
            </form>
        </Card>
    )
}

export default NewSpotCard
