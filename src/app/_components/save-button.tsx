'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'

export const SaveButton = () => {
    const { pending } = useFormStatus()

    return <Button type="submit" disabled={pending}>Send</Button>
}
