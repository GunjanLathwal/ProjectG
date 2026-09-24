import { useEffect, useRef, useState } from "react";
import { Music2, Pause, Play } from "lucide-react";

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // 🎵 Keep the birthday music soft and in the background
    audio.volume = 0.14;

    const onError = () => setAvailable(false);

    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("error", onError);
    };
  }, []);

  const toggle = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch {
      setAvailable(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/birthday-song.mp3"
        loop
        preload="none"
      />

      <button
        onClick={toggle}
        disabled={!available}
        aria-label={
          available
            ? playing
              ? "Pause music"
              : "Play music"
            : "Music file not added"
        }
        className="fixed right-4 top-4 z-50 rounded-full border border-ink/10 bg-paper/90 p-3 shadow-soft backdrop-blur transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red disabled:opacity-40"
        title={
          available
            ? "Birthday music"
            : "Add /public/audio/birthday-song.mp3"
        }
      >
        {playing ? <Pause size={17} /> : <Play size={17} />}

        <Music2
          size={13}
          className="absolute -right-1 -bottom-1 rounded-full bg-red text-paper p-0.5"
        />
      </button>
    </>
  );
}