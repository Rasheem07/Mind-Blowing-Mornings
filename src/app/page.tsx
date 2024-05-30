import TestimonialCard from "@/components/testimonialCard";
import {
  Facebook,
  GroupIcon,
  Instagram,
  Smile,
  Star,
  Tv,
  Twitter,
  User2,
} from "lucide-react";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"], weight: "600" });
export default function Home() {
  return (
    <main className="scroll-snap">
      <section
        className="min-h-screen max-h-screen bg-fixed bg-cover bg-parallax relative shadow-inner flex flex-col items-center overlay background"
        style={{
          backgroundImage: "url('/assets/Background.png')",
          backgroundRepeat: "none",
          backgroundSize: "cover"
        }}
      >
        <div className="fixed inset-y-0 inset-x-0 overlay z-[-1]"></div>
        <center className="header text-2xl flex flex-col items-center w-full md:max-w-[60%] mt-24 md:mt-32 text-[#FFFFFF] font-sans">
          Transform your mind and body with our 21-day wellness program. Join
          our community and unlock your limitless potential today
        </center>
        <button className="bg-[#F47D31] py-2.5 px-5 rounded-lg shadow-md uppercase z-10 mt-8 text-white hover:bg-orange-400/90 transition-colors cursor-pointer">
          Get Started
        </button>
        <Image
          src="/assets/Foreground.png"
          alt=""
          height={376}
          width={340}
          className="object-contain absolute bottom-0 left-1/2 foreground"
        />
      </section>

      <section className="flex flex-col pb-8 bg-white m-0 items-center w-full mx-auto relative px-2.5 py-5 md:p-5">
        <div className="md:max-w-screen-lg">
          <div className="flex items-center justify-between md:gap-5 gap-2">
            <div>
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#F47D31]">
                The Secret to mind blowing Mornings!
              </h2>
              <p className="text-sm md:text-lg font-medium text-[#615F5F]">
                Start the day with engaging your body physically, mentally and
                spiritually.
              </p>
            </div>
            <Image
              src="/assets/Ellipse 72.png"
              alt=""
              height={200}
              width={200}
              className="h-[125px] w-[125px] md:h-[200px] md:w-[200px]"
            />
          </div>
          <div className="flex items-center gap-2 md:gap-5">
            <Image
              src="/assets/Ellipse 71.png"
              alt=""
              height={200}
              width={200}
              className="h-[125px] w-[125px] md:h-[200px] md:w-[200px]"
            />
            <div>
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#F47D31]">
                Warm-up your body within an hour!
              </h2>
              <ul className="text-sm md:text-lg font-medium text-[#615F5F]">
                <li>Dynamic warm ups</li>
                <li>Spirited Yoga asanas</li>
                <li>Effective physical exercises</li>
                <li>Whole body engaging movements</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 md:gap-5">
            <div>
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#F47D31]">
                We are invested in your Success!
              </h2>
              <p className="text-sm md:text-lg text-[#615F5F]"> We prioritise your well-being
                and promise to provide you with a healthy lifestyle and empower
                you with a successful morning routine .
              </p>
            </div>
            <Image
              src="/assets/Ellipse 70.png"
              alt=""
              height={200}
              width={200}
              className="h-[125px] w-[125px] md:h-[200px] md:w-[200px]"
            />
          </div>
        </div>
        <div className="hidden md:flex flex-col absolute top-0 right-0 items-end gap-2">
          <div className="py-2 px-[22px] bg-[#F47D31] text-white flex flex-col items-center font-semibold text-sm">
            <p className="rotate-90 tracking-tighter">C</p>
            <p className="rotate-90 tracking-tighter">o</p>
            <p className="rotate-90 tracking-tighter">n</p>
            <p className="rotate-90 tracking-tighter">t</p>
            <p className="rotate-90 tracking-tighter">a</p>
            <p className="rotate-90 tracking-tighter">c</p>
            <p className="rotate-90 tracking-tighter">t</p>
          </div>
          <Image src="/assets/Frame 158.png" alt="" height={58} width={57} />
        </div>
        <Image
          src="/assets/Frame 162.svg"
          alt=""
          height={100}
          width={150}
          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2"
        />
      </section>

      <section className=" bg-[#F47D31] flex flex-col md:flex-row gap-5 md:gap-0 items-center md:items-start justify-between px-5 py-3.5 md:px-10 md:py-7 transalte-3d">
        <div className="max-w-[35%] min-w-[35%] flex flex-col items-center justify-center">
          <Image
            src="/assets/Ellipse 40.png"
            alt=""
            height={414}
            width={439}
            objectFit="contain"
            className=" object-contain opacity-95"
          />
        </div>
        <div className="flex flex-col gap-8 md:max-w-[60%]">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-wide text-white">
              WHAT IS MINDBLOWING MORNINGS?
            </h2>
            <p className="text-[18px] leading-[26px] text-[#f2f2f2] font-sans">
              We are a wellness program dedicated to helping individuals
              discover their inner potential and live a healthy lifestyle. Our
              program is led by a team of knowledgeable and passionate
              instructors. We aim to provide physical, mental and emotional
              benefits through daily yoga, meditation and breathing practices.
            </p>
            <div>
              <h2 className="text-2xl font-bold tracking-wide text-white">
                THE 21/90 RULE
              </h2>
              <p className="text-[18px] leading-[26px] text-[#f2f2f2] font-sans">
                The formula to win is simple yet consistency plays the keys
                role, we are here with a formula that never fails if we continue
                to thrive and put our efforts with passion. We are here to move
                you with goal driven attitude but with natural flow not making
                it a military training but a training that sustains and
                motivates you to keep working within time. Guided by
                professionals and motivating you with necessary understanding of
                habit nurturing.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-wide text-white">
              OUR MISSION
            </h2>
            <p className="text-[18px] leading-[26px] text-[#f2f2f2] font-sans">
              In today&apos;s fast-paced world, the rat race is not normal. We
              don&apos;t even identify ourselves with the damage we do to
              ourselves.
            </p>
            <p className="text-[18px] leading-[26px] text-[#f2f2f2] font-sans">
              To address this cause and the importance of waking up early is our
              major agenda. In a way, it does feel like an accomplishment
              whenever you&apos;re able to get up early. You can get started on
              what you need to do, and hopefully be done early to enjoy the rest
              of your day.
            </p>
            <p className="text-[18px] leading-[26px] text-[#f2f2f2] font-sans">
              In that sense, waking up early is not only a win psychologically
              but also a win physically.
            </p>
          </div>
        </div>
      </section>

      <section className=" px-4 md:px-8 py-2 transalte-3d">
        <div className="grid grid-cols-4 grid-flow-row py-1 subpixel-antialiased divide-x-2 divide-[#F47D31] ">
          <div className="flex flex-1 flex-col items-center gap-1 justify-center">
            <User2 className="text-[#F47D31]" />
            <h4 className="text-sm md:text-lg max-w-[50%] md:max-w-none mx-auto font-semibold text-gray-900">
              Qualified Instructors
            </h4>
            <strong>1+</strong>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1 justify-center">
            <GroupIcon className="text-[#F47D31]" />
            <h4 className="text-sm md:text-lg max-w-[50%] md:max-w-none mx-auto font-semibold text-gray-900">
              Enrolled Members
            </h4>
            <strong>20+</strong>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1 justify-center">
            <Tv className="text-[#F47D31]" />
            <h4 className="text-sm md:text-lg max-w-[50%] md:max-w-none mx-auto font-semibold text-gray-900">
              Sessions
            </h4>
            <strong>5+</strong>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1 justify-center">
            <Smile className="text-[#F47D31]" />
            <h4 className="text-sm md:text-lg max-w-[50%] md:max-w-none mx-auto font-semibold text-gray-900">
              Happy Customers
            </h4>
            <strong>14+</strong>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 mt-8 max-w-screen-md mx-auto">
          <div className="flex flex-col items-center gap-1.5">
            <h2 className="text-[#F47D31] text-2xl font-bold">
              Our instructors
            </h2>
            <center className="text-[#52525B] text-[16px] leading-6">
              Experienced professionals in the field who can change your life!
            </center>
          </div>
          <div className="flex flex-col md:flex-row items-center md:gap-5 pl-2 md:p-0">
            <Image
              src="/assets/Ellipse 22.png"
              alt=""
              height={212}
              width={212}
              className="object-contain"
            />
            <p className=" text-[#5C5C5C] text-[16px] leading-6 font-sans">
              Mandar is a highly knowledgeable and certified Yoga Instructor,
              deeply devoted to yoga and the art of teaching. His expertise
              extends beyond yoga itself, encompassing various habits that
              contribute to creating an optimal morning routine. Mandar takes
              immense pleasure in instilling positivity and enriching the lives
              of others through his teachings.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-14 gap-5 px-8">
          <div className="flex flex-col items-center w-full md:w-auto gap-1.5">
            <h2 className="text-[#F47D31] md:text-2xl font-bold">
              Our happy clients say about us
            </h2>
            <center className="text-[#52525B] text-[16px] leading-6">
              2,157 people have said how good Mind blowing mornings
            </center>
          </div>
          <div className="grid md:grid-cols-3 md:grid-flow-row gap-5 w-full relative z-20 md:py-8 md:px-0 px-4 py-4">
            <TestimonialCard
              testimonial="“I've never felt more energized and alive. This program has truly transformed my life”"
              client="Sarah K"
              proffesion="Journalist"
            />
            <TestimonialCard
              testimonial="“The instructors are amazing, and the community support is invaluable. Highly recommend!”"
              client="John D"
              proffesion="Digital Marketer"
            />
            <TestimonialCard
              testimonial="“I never thought I could do yoga, but this program made it accessible and enjoyable for me.”"
              client="Lisa M"
              proffesion="Graphic Designer"
            />
            <div className="h-[50%] w-full md:h-full md:w-[50%] absolute inset-x-0 top-1/2 md:inset-y-0 md:left-1/2 gradient1 -translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 opacity-30" />
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <Image
            src="/assets/Rectangle 4.png"
            alt=""
            height={250}
            width={250}
          />
          <Image
            src="/assets/Rectangle 5.png"
            alt=""
            height={250}
            width={250}
          />
          <Image src="/assets/Rectangle.png" alt="" height={300} width={300} />
          <Image
            src="/assets/Rectangle 2.png"
            alt=""
            height={250}
            width={250}
          />
          <Image
            src="/assets/Rectangle 3.png"
            alt=""
            height={250}
            width={250}
          />
        </div>
      </section>
      <section className="flex flex-col items-center px-8 py-2 mt-8">
        <div className="flex flex-col items-center gap-1.5">
          <h2 className="text-[#F47D31] text-2xl font-bold">
            We&apos;re here for you!
          </h2>
          <p className="text-[#52525B] text-[16px] leading-6">
            Got a question or need some help?
          </p>
        </div>

        <div className="max-w-screen-lg min-h-[300px] w-full border-2 border-[#F47D31] rounded-md mt-24 md:mt-8 relative flex flex-col items-center py-6">
          {/* form */}
          <div className="flex flex-col min-w-[65%] gap-5 mx-auto z-10 p-4 md:p-0">
            <div className="flex items-center flex-1 justify-between gap-5">
              <input
                type="text"
                placeholder="Name"
                className="border-[#EEEEEE] border-[1.1px] bg-[#FBFBFB] rounded-md shadow-md placeholder:text-[#3C3C3C] text-[18px] leading-[26px] py-1 px-3 w-full"
              />
              <input
                type="text"
                placeholder="Location"
                className="border-[#EEEEEE] border-[1.1px] bg-[#FBFBFB] rounded-md shadow-md placeholder:text-[#3C3C3C] text-[18px] leading-[26px] py-1 px-3 w-full"
              />
            </div>
            <div className="flex items-center flex-1 justify-between gap-5">
              <input
                type="tel"
                placeholder="Phone"
                className="border-[#EEEEEE] border-[1.1px] bg-[#FBFBFB] rounded-md shadow-md placeholder:text-[#3C3C3C] text-[18px] leading-[26px] py-1 px-3 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-[#EEEEEE] border-[1.1px] bg-[#FBFBFB] rounded-md shadow-md placeholder:text-[#3C3C3C] text-[18px] leading-[26px] py-1 px-3 w-full"
              />
            </div>
            <textarea
              className="border-[#EEEEEE] border-[1.1px] bg-[#FBFBFB] rounded-md shadow-md placeholder:text-[#3C3C3C] text-[18px] leading-[26px] py-1 px-3 w-full min-h-[100px] max-h-[100px]"
              placeholder="Questions / Comments"
            />
            <button className="bg-[#F47D31] py-2.5 px-5 rounded-lg shadow-md uppercase z-10 text-white hover:bg-orange-400/90 transition-colors cursor-pointer min-w-[50%] mx-auto">
              Submit
            </button>
          </div>
          {/* decorations */}
          <Image
            src="/assets/Frame 122.png"
            alt=""
            height={118}
            width={227}
            className="absolute -top-[6.7rem] left-4"
          />
          <div className="p-8 bg-[#F47D31] rounded-full shadow-inner absolute bottom-24 md:bottom-8 left-8"></div>
          <div className="p-7 bg-[#FFF6DA] rounded-full absolute bottom-40 left-80"></div>
          <div className="p-6 bg-[#FFF6DA] rounded-full absolute top-40 left-60"></div>
          <div className="p-8 bg-[#F47D31] md:block hidden rounded-full shadow-inner absolute bottom-20  right-40"></div>
          <div className="p-7 bg-[#FFF6DA] rounded-full absolute bottom-60 left-60"></div>
          <div className="p-6 bg-[#FFF6DA] rounded-full absolute bottom-40 right-10"></div>
          <div className="p-10 bg-[#FFF6DA] rounded-full absolute top-8 right-32"></div>
        </div>
      </section>

      <footer className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between px-16 py-2 my-16">
        <div className="flex flex-col gap-5 md:max-w-xs items-center">
          <Image
            src="/assets/logo.png"
            alt="logo"
            height={75}
            width={100}
            objectFit="contain"
          />
          <center className="text-[#3C3C3C] text-lg font-medium">
            Clear your thoughts, Focus your mind, and Reduce stress!
          </center>
        </div>
        <div className="flex flex-col gap-2 md:items-start items-center">
          <h4 className="text-lg font-semibold text-[#3C3C3C]">Quick Links</h4>
          <ul className="text-[#3C3C3C] text-[16px] leading-6 space-y-1">
            <li>Home</li>
            <li>Community</li>
            <li>Courses</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 md:items-start items-center">
          <h4 className="text-lg font-semibold text-[#3C3C3C]">Company</h4>
          <ul className="text-[#3C3C3C] text-[16px] leading-6 space-y-1">
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 md:items-start items-center">
          <h4 className="text-lg font-semibold text-[#3C3C3C]">
            Further Information
          </h4>
          <ul className="text-[#3C3C3C] text-[16px] leading-6 space-y-1">
            <li>Terms & Conditions</li>
            <li>Privacy policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 md:items-start items-center">
          <h4 className="text-lg font-semibold text-[#3C3C3C]">Need Help?</h4>
          <div className="flex items-center rounded-md shadow-md relative border-zinc-300">
            <input
              type="email"
              placeholder="Your e-mail address"
              className="border-[#EEEEEE] border-[1.1px] bg-[#FBFBFB] rounded-tl-md rounded-bl-md outline-none border-none shadow-md placeholder:text-[#3C3C3C] text-[18px] leading-[26px] py-1 px-3 max-w-[75%] flex-1"
            />
            <button className="bg-[#F47D31] rounded-tr-md rounded-br-md shadow-md uppercase z-10 text-white hover:bg-orange-400/90 transition-colors cursor-pointer absolute right-0 inset-y-0 mx-auto w-1/4 text-center">
              Submit
            </button>
          </div>
          <ul className="flex gap-5 items-center text-[#3C3C3C] text-[16px] leading-6 mt-4">
            <Instagram className="text-pink-600" />
            <Twitter className="text-blue-600" />
            <Facebook className="text-blue-800" />
          </ul>
        </div>
      </footer>
    </main>
  );
}
