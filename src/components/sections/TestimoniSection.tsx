import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import { useTranslations } from "next-intl";

const reviews = [
  {
    name: "Budi Santoso",
    username: "@budisantoso",
    body: "Saya belum pernah melihat sesuatu seperti ini sebelumnya. Sangat luar biasa dan menarik!",
    img: "/images/travel selfie-bro 1.png",
  },
  {
    name: "Siti Rahma",
    username: "@sitirahma",
    body: "Benar-benar di luar ekspektasi saya. Desainnya keren dan sangat mudah digunakan!",
    img: "/images/travel selfie-bro 1.png",
  },
  {
    name: "Andi Pratama",
    username: "@andipratama",
    body: "Saya sangat terkesan dengan tampilannya. Semua terlihat profesional dan rapi.",
    img: "/images/travel selfie-bro 1.png",
  },
  {
    name: "Rina Lestari",
    username: "@rinalestari",
    body: "Luar biasa! Saya sangat suka pengalaman pengguna yang diberikan. Sangat intuitif!",
    img: "/images/travel selfie-bro 1.png",
  },
  {
    name: "Dewi Anggraini",
    username: "@dewianggraini",
    body: "Sederhana tapi sangat efektif. Saya bisa dengan mudah menemukan yang saya butuhkan.",
    img: "/images/travel selfie-bro 1.png",
  },
  {
    name: "Joko Setiawan",
    username: "@jokosetiawan",
    body: "Hasil yang sangat mengesankan! Saya pasti akan merekomendasikannya kepada teman-teman.",
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
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full bg-primary"
          width="32"
          height="32"
          alt=""
          src={img}
        />
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
  const t = useTranslations();
  return (
    <section className="h-auto py-16  bg-white">
      <div className="px-4 sm:px-6 lg:px-10 text-center">
        <div className="text-center w-full flex justify-center items-center ">
          <h4 className="text-center py-4 text-2xl sm:text-4xl border-b-2 border-secondary w-fit">
            {t("testiTitle")}
          </h4>
        </div>{" "}
      </div>
      <div className="relative flex w-full flex-col items-center justify-center py-20 overflow-hidden rounded-lg">
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
