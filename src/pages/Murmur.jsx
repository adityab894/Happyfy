import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Murmur = () => {
  const [sounds, setSounds] = useState([
    { name: 'Rain', volume: 50, isPlaying: false, file: '/sounds/rain2.mp3', audio: null, icon:"rain" },
    { name: 'Thunder', volume: 50, isPlaying: false, file: '/sounds/thunder.mp3', audio: null, icon:"thunder"},
    { name: 'Coffeeshop', volume: 50, isPlaying: false, file: '/sounds/coffeeshop.mp3', audio: null, icon:"shop" },
    { name: 'Birds', volume: 50, isPlaying: false, file: '/sounds/birds.mp3', audio: null, icon:"bird" },
    { name: 'Fire', volume: 50, isPlaying: false, file: '/sounds/fire.mp3', audio: null, icon:"fire" },
    { name: 'Waves', volume: 50, isPlaying: false, file: '/sounds/waves.mp3', audio: null, icon:"wave" },
    { name: 'Wind', volume: 50, isPlaying: false, file: '/sounds/wind.mp3', audio: null, icon:"wind" },
    { name: 'Crickets', volume: 50, isPlaying: false, file: '/sounds/crickets.mp3', audio: null, icon:"cricket" }
  ]);

  const toggleAllSounds = () => {
    const newSounds = [...sounds];
    const isAnySoundPlaying = newSounds.some(sound => sound.isPlaying);

    newSounds.forEach(sound => {
      if (isAnySoundPlaying) {
        sound.audio.pause();
        sound.audio.currentTime = 0;
      } else {
        const audio = new Audio(sound.file);
        audio.volume = sound.volume / 100;
        audio.loop = true;
        audio.play();
        sound.audio = audio;
      }
      sound.isPlaying = !isAnySoundPlaying;
    });

    setSounds(newSounds);
  };

  const adjustVolume = (index, volume) => {
    const newSounds = [...sounds];
    newSounds[index].volume = volume;
    if (newSounds[index].audio) {
      newSounds[index].audio.volume = volume / 100;
    }
    setSounds(newSounds);
  };

  return (
    <div>
      <Navbar/>
    <div className=" bg-[#a5ffc7] flex justify-center flex-col items-center py-[44px]">
      
      <div className=" flex flex-wrap  w-[80%] h-[80%] z-10 bg-[#026260] text-white rounded-xl relative">
      <button onClick={toggleAllSounds} className=" text-black px-5 py-2 rounded-xl absolute top-5 right-[50%] translate-x-[50%]">
        <img src={sounds.some(sound => sound.isPlaying) ? './assets/pause.png' : './assets/play.png'} alt="" />
        </button>
        <img src="https://i.pinimg.com/originals/05/ff/99/05ff99f74a6efc38664f56f113080915.jpg" alt="" className=" absolute -z-10 opacity-20 h-[100%] w-[100%] object-cover " />
        
        {sounds.map((sound, index) => (
          <div className="sound-element w-[25%] py-20 flex justify-center flex-col items-center gap-5" key={index}>
            <img src={`./assets/${sound.icon}.svg`} alt="" className=" w-16" />
            <div className=" rounded-xl p-5 flex justify-center items-center flex-col">
            <input
  className="w-full h-2 appearance-none bg-gray-200 rounded-full outline-none "
  type="range"
  min="0"
  max="100"
  value={sound.volume}
  onChange={(e) => adjustVolume(index, e.target.value)}
/>
</div>
          </div>
        ))}
      </div>
      
      
    </div>
    </div>
    
  );
};

export default Murmur;
