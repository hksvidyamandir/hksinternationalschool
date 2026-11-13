import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import type { ProgrammePhoto } from "@/lib/programme-photos";

export function ProgrammeCarousel({ title, photos }: { title: string; photos: ProgrammePhoto[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!api) return;
    const update = () => setActive(api.selectedScrollSnap());
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => { api.off("select", update); api.off("reInit", update); };
  }, [api]);

  return <Carousel opts={{ loop: true }} setApi={setApi} className="programme-carousel" aria-label={`${title} photos`}>
    <CarouselContent className="programme-photo-track">
      {photos.map((photo, index) => <CarouselItem key={photo.src} className="programme-photo-slide" aria-label={`${index + 1} of ${photos.length}`} aria-hidden={index !== active}>
        <img src={photo.src} alt={`${title}: ${photo.caption} (illustrative image)`} loading="lazy" />
      </CarouselItem>)}
    </CarouselContent>
    <div className="programme-photo-caption" aria-live="polite"><span>{photos[active]?.caption}</span><small>{active + 1} / {photos.length}</small></div>
    <div className="programme-photo-controls">
      <Button variant="ghost" size="icon" aria-label={`Previous ${title} photo`} title="Previous photo" onClick={() => api?.scrollPrev()}><ArrowLeft /></Button>
      <div className="programme-photo-dots" aria-label="Choose a photo">{photos.map((photo, index) => <Button key={photo.src} variant="ghost" size="icon" aria-label={`Show ${title} photo ${index + 1}`} aria-current={index === active ? "true" : undefined} onClick={() => api?.scrollTo(index)}><span /></Button>)}</div>
      <Button variant="ghost" size="icon" aria-label={`Next ${title} photo`} title="Next photo" onClick={() => api?.scrollNext()}><ArrowRight /></Button>
    </div>
  </Carousel>;
}