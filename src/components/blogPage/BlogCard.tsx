import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  imageUrl,
  date,
}) => {
  return (
    <div className="w-full   rounded-lg overflow-hidden  bg-white">
      <Image
        className="w-full h-48 object-cver"
        width={500}
        height={500}
        src={imageUrl}
        alt={title}
      />
      <div className="px-3 py-4 ">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {/* <p className="text-gray-600 text-sm mt-2">{excerpt}</p> */}
        <span className="mt-4 text-gray-500 text-xs  bottom-4">{date}</span>
      </div>
    </div>
  );
};

export default BlogCard;
