import Image from "next/image";
import Hero from "@/components/Hero";
import CourseDescription from "@/components/CourseDescription";

export default function Home() {
  return (
    <div>
      <Hero />
      <CourseDescription />
    </div>
  );
}
