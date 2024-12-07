import React from 'react';
import { Music2, Headphones, Globe2, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Music2 className="h-12 w-12" />,
    title: "Millions of Songs",
    description: "Access to over 70 million songs from artists all around the world."
  },
  {
    icon: <Headphones className="h-12 w-12" />,
    title: "HD Music",
    description: "Crystal clear sound quality for an immersive music experience."
  },
  {
    icon: <Globe2 className="h-12 w-12" />,
    title: "Stream Everywhere",
    description: "Listen to your favorite music anywhere, anytime."
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Mobile App",
    description: "Download music and listen offline on your mobile device."
  }
];

export function Features() {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-500/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}