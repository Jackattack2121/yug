'use client'

import { useRef, useState, useEffect } from 'react'
import {
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineVolumeUp,
  HiOutlineVolumeOff,
} from 'react-icons/hi'
import { MdOutlineFullscreen } from 'react-icons/md'

interface VideoPlayerProps {
  src: string
  /** Optional explicit label shown at the bottom */
  label?: string
  sublabel?: string
  /** Aspect ratio class — defaults to 'aspect-video' */
  aspectClass?: string
  /** Size of the centre play/pause button */
  buttonSize?: 'sm' | 'md' | 'lg'
}

function useMidpointThumbnail(src: string) {
  const [thumbnail, setThumbnail] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const tmp = document.createElement('video')
    tmp.src = src
    tmp.crossOrigin = 'anonymous'
    tmp.muted = true
    tmp.preload = 'metadata'

    tmp.onloadedmetadata = () => {
      tmp.currentTime = tmp.duration / 2
    }

    tmp.onseeked = () => {
      if (cancelled) return
      const canvas = document.createElement('canvas')
      canvas.width = tmp.videoWidth
      canvas.height = tmp.videoHeight
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(tmp, 0, 0)
        try {
          setThumbnail(canvas.toDataURL('image/jpeg', 0.85))
        } catch {
          // canvas tainted or unsupported — no thumbnail
        }
      }
    }

    return () => {
      cancelled = true
      tmp.src = ''
    }
  }, [src])

  return thumbnail
}

export default function VideoPlayer({
  src,
  label,
  sublabel,
  aspectClass = 'aspect-video',
  buttonSize = 'md',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const thumbnail = useMidpointThumbnail(src)

  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [showThumb, setShowThumb] = useState(true)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
      setShowThumb(false)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const requestFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    if (v.requestFullscreen) {
      v.requestFullscreen()
    } else if ((v as HTMLVideoElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen) {
      (v as HTMLVideoElement & { webkitRequestFullscreen: () => void }).webkitRequestFullscreen()
    }
  }

  const btnSizes = {
    sm: { outer: 'w-12 h-12', icon: 'w-5 h-5' },
    md: { outer: 'w-16 h-16', icon: 'w-7 h-7' },
    lg: { outer: 'w-20 h-20', icon: 'w-9 h-9' },
  }
  const btn = btnSizes[buttonSize]

  return (
    <div
      ref={containerRef}
      className={`relative group bg-black overflow-hidden cursor-pointer ${aspectClass}`}
      onClick={togglePlay}
    >
      {/* Actual video */}
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        onEnded={() => { setPlaying(false); setShowThumb(true) }}
      />

      {/* Thumbnail overlay — shown until first play */}
      {thumbnail && showThumb && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt="Video thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

      {/* Centre play/pause */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}
      >
        <div
          className={`${btn.outer} rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}
        >
          {playing
            ? <HiOutlinePause className={`${btn.icon} text-white`} />
            : <HiOutlinePlay className={`${btn.icon} text-white ml-0.5`} />
          }
        </div>
      </div>

      {/* Bottom bar: label + controls */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-end justify-between pointer-events-none">
        <div className="flex-1 min-w-0">
          {label && (
            <p className="text-white font-bold text-sm font-montserrat leading-tight truncate">{label}</p>
          )}
          {sublabel && (
            <p className="text-white/65 text-xs mt-0.5 truncate">{sublabel}</p>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 pointer-events-auto ml-3 flex-shrink-0">
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 transition-colors border border-white/20 backdrop-blur-sm"
            title={muted ? 'Unmute' : 'Mute'}
          >
            {muted
              ? <HiOutlineVolumeOff className="w-4 h-4 text-white" />
              : <HiOutlineVolumeUp className="w-4 h-4 text-white" />
            }
          </button>
          <button
            onClick={requestFullscreen}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 transition-colors border border-white/20 backdrop-blur-sm"
            title="Fullscreen"
          >
            <MdOutlineFullscreen className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
