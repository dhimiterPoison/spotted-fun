'use client'

import { useState, useRef, useEffect, WheelEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, XIcon, XCircleIcon } from 'lucide-react'
import { Button } from '../_components/ui/button'
import { ScrollArea } from '../_components/ui/scroll-area'
import { TextGenerateEffect } from '../_components/ui/text-generate-effect'


// import localFont from 'next/font/local'

// const etherealSemibold = localFont({
// 	src: [
// 	  {
// 		path: 'font/ethereal-semibold.otf',
// 		weight: '700',
// 		style: 'normal',
// 	  },
// 	],
// 	variable: '--font-ethereal',
//   });


// Define the types for photo and filmRoll objects
type Photo = {
    id: number
    url: string
    caption: string
    extension: string
}

type FilmRoll = {
    id: number
    title: string
    coverImage: string
    color: string
    photos: Photo[]
}

const words = `Magic captured into film rolls. Memories assume phisical shape.`

// Define the type for filmRolls array
const filmRolls: FilmRoll[] = [
    {
        id: 1,
        title: 'Urban Jungle',
        coverImage: '/adventures/first-amsterdam/hires/1.jpg',
        color: '#FF6B6B',
        photos: [
            {
                id: 1,
                url: '/adventures/first-amsterdam',
                extension: 'jpg',
                caption: 'Neon lights reflecting in puddles',
            },
            {
                id: 2,
                url: '/adventures/first-amsterdam',
                extension: 'jpg',
                caption: 'Graffiti-covered alleyways',
            },
            {
                id: 3,
                url: '/adventures/first-amsterdam',
                extension: 'jpg',
                caption: 'Bustling night markets',
            },
            {
                id: 4,
                url: '/adventures/first-amsterdam',
                extension: 'jpg',
                caption: 'Misty canals at dawn',
            },
            {
                id: 5,
                url: '/adventures/first-amsterdam',
                extension: 'jpg',
                caption: 'Bicycles lined along bridges',
            },
            {
                id: 6,
                url: '/adventures/first-amsterdam',
                extension: 'jpg',
                caption: 'Street performers in Dam Square',
            },
            {
                id: 7,
                url: '/adventures/first-amsterdam',
                extension: 'jpg',
                caption: 'Historic buildings by the waterfront',
            },
            {
                id: 8,
                url: '/adventures/first-amsterdam',
                extension: 'jpg',
                caption: 'Autumn leaves on the streets',
            },
            {
                id: 9,
                url: '/adventures/first-amsterdam',
                extension: 'jpg',
                caption: 'Vibrant markets with fresh flowers',
            },
            {
                id: 10,
                url: '/adventures/first-amsterdam',
                extension: 'jpg',
                caption: 'Tram passing by at sunset',
            },
            {
                id: 11,
                url: '/adventures/first-amsterdam',
                extension: 'jpg',
                caption: 'Evening reflections on canals',
            },
        ],
    },
    {
        id: 2,
        title: `Albania '22`,
        coverImage: '/adventures/albania22/hires/1.jpg',
        color: '#4ECDC4',
        photos: [
			{
                id: 1,
                url: '/adventures/albania22',
                extension: 'jpg',
                caption: 'Neon lights reflecting in puddles',
            },
            {
                id: 2,
                url: '/adventures/albania22',
                extension: 'jpg',
                caption: 'Graffiti-covered alleyways',
            },
            {
                id: 3,
                url: '/adventures/albania22',
                extension: 'jpg',
                caption: 'Bustling night markets',
            },
        ],
    },
    {
        id: 3,
        title: 'Neon Nights',
        coverImage: '/placeholder.svg?height=600&width=400',
        color: '#FF6B6B',
        photos: [
            {
                id: 1,
                url: '/placeholder.svg?height=800&width=600',
                caption: 'Cyberpunk cityscape',
            },
            {
                id: 2,
                url: '/placeholder.svg?height=800&width=600',
                caption: 'Retro arcade glow',
            },
            {
                id: 3,
                url: '/placeholder.svg?height=800&width=600',
                caption: 'Futuristic fashion',
            },
        ],
    },
    // Add more film rolls as needed
]

export default function AnalogAdventures() {
    // Define the type for selectedRoll state
    const [selectedRoll, setSelectedRoll] = useState<FilmRoll | null>(null)
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const container = containerRef.current
        if (container && !selectedRoll) {
            const handleWheel = (e: WheelEvent) => {
                e.preventDefault()
                container.scrollLeft += e.deltaY
            }
            container.addEventListener(
                'wheel',
                handleWheel as unknown as EventListener
            )
            return () => {
                container.removeEventListener(
                    'wheel',
                    handleWheel as unknown as EventListener
                )
            }
        }
    }, [selectedRoll])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedRoll(null)
                setCurrentPhotoIndex(0)
            }
        }

        // Attach event listener when the component is mounted
        window.addEventListener('keydown', handleKeyDown)

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    const nextPhoto = () => {
        setCurrentPhotoIndex(prevIndex =>
            selectedRoll
                ? (prevIndex + 1) % selectedRoll.photos.length
                : prevIndex
        )
    }

    const prevPhoto = () => {
        setCurrentPhotoIndex(prevIndex =>
            selectedRoll
                ? (prevIndex - 1 + selectedRoll.photos.length) %
                  selectedRoll.photos.length
                : prevIndex
        )
    }

    return (
        <div className="min-h-screen w-full bg-white text-black overflow-hidden">
            <ScrollArea className="h-screen z-0">
                <div className="p-8">
                    <h1 className={`hero-title text-4xl md:text-6xl font-bold mb-12 tracking-tighter`}>
					{/* ${etherealSemibold.className} */}
                        Analog adventures
                    </h1>
                    <TextGenerateEffect
                        duration={2}
                        filter={false}
                        words={words}
                    />

                    {!selectedRoll && (
                        <div
                            ref={containerRef}
                            className="flex space-x-8 overflow-x-auto py-8 snap-x snap-mandatory"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >
                            {filmRolls.map(roll => (
                                <motion.div
                                    key={roll.id}
                                    className="flex-shrink-0 w-80 h-96 snap-center cursor-pointer relative overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedRoll(roll)}
                                >
                                    <img
                                        src={roll.coverImage}
                                        alt={roll.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 flex items-start p-6"
                                        style={{
                                            background: `linear-gradient(to top, transparent, black)`,
                                        }}
                                        // style={{ background: `linear-gradient(to top, ${roll.color}cc, transparent)` }}
                                    >
                                        <h2 className="text-3xl font-bold text-white">
                                            {roll.title}
                                        </h2>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    <AnimatePresence>
                        {selectedRoll && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                className="fixed inset-0 bg-white p-8 overflow-hidden flex flex-col top-20 z-40"
                                style={{
                                    backgroundColor: `${selectedRoll.color}22`,
                                }}
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => {
                                        setSelectedRoll(null)
                                        setCurrentPhotoIndex(0)
                                    }}
                                    className="flex w-fit cursor-pointer p-2 absolute right-8 text-black z-50"
                                >
                                    <span className="flex items-center gap-4 text-lg uppercase">
                                        Close
                                        <XCircleIcon strokeWidth={2} />
                                    </span>
                                </Button>
                                {/* <h2 className="text-5xl font-bold mb-8">
                                    {selectedRoll.title}
                                </h2> */}
                                <div className="flex-1 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img
                                            src={`${selectedRoll?.photos[currentPhotoIndex]?.url}/lowres/${currentPhotoIndex + 1}.${selectedRoll?.photos[currentPhotoIndex]?.extension}`}
                                            srcSet={`${selectedRoll?.photos[currentPhotoIndex]?.url}/lowres/${currentPhotoIndex + 1}.${selectedRoll?.photos[currentPhotoIndex]?.extension} 600w,${selectedRoll?.photos[currentPhotoIndex]?.url}/hires/${currentPhotoIndex + 1}.${selectedRoll?.photos[currentPhotoIndex]?.extension} 1200w`}
                                            alt={
                                                selectedRoll?.photos[
                                                    currentPhotoIndex
                                                ]?.caption
                                            }
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        onClick={prevPhoto}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 "
                                    >
                                        <ChevronLeft size={32} />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={nextPhoto}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                                    >
                                        <ChevronRight size={32} />
                                    </Button>
                                </div>
                                <p className="text-xl mt-4 text-center">
                                    {
                                        selectedRoll?.photos[currentPhotoIndex]
                                            ?.caption
                                    }
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </ScrollArea>
        </div>
    )
}
