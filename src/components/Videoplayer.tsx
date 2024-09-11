"use client"
import React ,{useState , useRef}from 'react'

interface VideoPlayerProps {
    src: string;
    title: string;
}
  
const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Ref to the video element
    const [isMuted, setIsMuted] = useState<boolean>(true); // State to manage mute status
  
    const handleClick = () => {
        if (videoRef.current) {
          videoRef.current.muted = !videoRef.current.muted; // Toggle mute status
          setIsMuted(videoRef.current.muted); // Update state
        }
      };

    return (
        <div className='d-flex flex-col mb-2'>
          <div className='video-title'> 
            {title} 
        </div>
        <div className='speaker-icon'>{isMuted ? 
              <i className="fas fa-volume-mute"></i> :
              <i className="fas fa-volume-up"></i>}
        </div>
        <video
          ref={videoRef}
          src={src}
          title={title}
          loop
          autoPlay
          muted={isMuted} // Control mute state
          playsInline
          style={{ width: '100%', height: 'auto', cursor: 'pointer' }} // Optional: Pointer cursor to indicate clickability
          onClick={handleClick} // Click event handler
        >
          <source src={src} type="video/mov" />
          Your browser does not support the video tag.
        </video>
      </div>    
    )
}

export default VideoPlayer