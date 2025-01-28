import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/travel selfie-bro 1.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/images/travel selfie-bro 1.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/travel selfie-bro 1.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/travel selfie-bro 1.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/travel selfie-bro 1.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/travel selfie-bro 1.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full bg-primary" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function TestimoniSection() {
  return (
    <section className="h-auto py-5">
      <div className="px-4 sm:px-6 lg:px-10 text-center">
        <h1 className="text-2xl font-bold text-secondary">Apa kata client kami?</h1>
        <p className="text-accent mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg">
          Di nugasking, kepuasan pelanggan adalah prioritas utama kami. Kami bangga telah bekerja dengan berbagai individu dan bisnis, memberikan solusi teknologi yang tepat dan efektif. Di sini, Anda akan mendengar langsung dari mereka tentang bagaimana kami membantu mewujudkan ide dan menyelesaikan tantangan digital mereka. Setiap testimoni mencerminkan komitmen kami untuk selalu memberikan hasil yang luar biasa dan membangun hubungan jangka panjang yang saling menguntungkan.
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center pt-10 overflow-hidden rounded-lg">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
}
