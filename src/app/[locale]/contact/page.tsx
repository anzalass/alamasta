import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const t = useTranslations();
  return (
    <main className="min-h-screen  w-full py-36">
      <div className="w-11/12 mx-auto lg:gap-20 gap-10 flex flex-col  lg:flex lg:flex-row ">
        <div className="lg:w-[60%] w-full mx-auto">
          <p className="text-3xl font-bold">{t("contact_title")}</p>
          <p className="mt-10 leading-7 ">{t("contact_message")}</p>
        </div>
        <div className="space-y-10 lg:w-[60%] w-full mx-auto text-secondary">
          <div className="flex flex-col">
            <p>Phone / WhatsApp</p>
            <Link
              href={"https://wa.me/6285179945123"}
              className="text-3xl mt-3 font-[700]"
            >
              +62 85179945123
            </Link>
            <hr />
          </div>
          <div className="">
            <p>Email</p>
            <p className="text-3xl mt-3 font-[700]">alamasta17@gmail.com</p>
            <hr />
          </div>
        </div>
      </div>
      <form className="w-11/12 mx-auto ">
        {/* Input fields */}

        <div className="mt-10">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            className="w-full mt-2 h-[50px] pl-3 border-[1px] border-secondary rounded-xl"
            placeholder="Ex : John Doe"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="w-full mt-2 h-[50px] pl-3 border-[1px] border-secondary rounded-xl"
            placeholder="Ex : john@example.com"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="">Phone/Mobile</label>
          <input
            type="number"
            className="w-full mt-2 h-[50px] pl-3 border-[1px] border-secondary rounded-xl"
            placeholder=""
          />
        </div>
        <div className="mt-6">
          <label htmlFor="">Subject</label>
          <input
            type="text"
            className="w-full mt-2 h-[50px] pl-3 border-[1px] border-secondary rounded-xl"
            placeholder="Your Subject"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="">Message</label>
          <textarea
            className="w-full h-[200px] mt-2 p-3 border-[1px] border-secondary rounded-xl"
            placeholder="Your Message"
          ></textarea>
        </div>
        {/*... */}
        <button
          type="submit"
          className="mt-10 w-full bg-secondary text-white py-3 px-8 rounded-xl hover:bg-green-600 transition duration-300"
        >
          Send Your Message
        </button>
      </form>
    </main>
  );
}
