import Image from "next/image";

const cakePhotos = [
  { src: "https://placehold.co/600x400.png", hint: "chocolate cake" },
  { src: "https://placehold.co/600x400.png", hint: "assorted pastries" },
  { src: "https://placehold.co/600x400.png", hint: "custom birthday cake" },
  { src: "https://placehold.co/600x400.png", hint: "artisan bread" },
  { src: "https://placehold.co/600x400.png", hint: "cupcakes" },
  { src: "https://placehold.co/600x400.png", hint: "croissants" },
  { src: "https://placehold.co/600x400.png", hint: "wedding cake" },
  { src: "https://placehold.co/600x400.png", hint: "fruit tart" },
];

export function PhotoGrid() {
  return (
    <div id="photo-grid" className="photo-grid">
      {cakePhotos.map((photo, index) => (
        <div key={index} className="photo-item">
          <Image
            src={photo.src}
            alt={`Delicious Cake ${index + 1}`}
            width={600}
            height={400}
            data-ai-hint={photo.hint}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  );
}
