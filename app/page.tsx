import HeroCards from "@/components/HeroCards"
import Skills from "@/components/Skills"
import Link from "next/link";


export default function Home() {
   return (
    <>
    <h1 className="container mt-4 text-left fw-bold display-3 p-3">Hi, I'm Abin  👋</h1>
    <h2 className="container mt-4 text-left fw-bold display-5">Full Stack Developer | Nextjs Developer
    </h2>
        <p className="container mt-4 text-left p-4 fw-normal fs-5">Currently, I am expanding my capabilities as a Trainee at {""} 
            
            <Link href="https://www.maktalseo.com" target="_blank" rel="noopener noreferrer" className="link-success">
              MakTal Technologies Pvt Ltd
            </Link>,
            
            where I am leveraging Next.js to learn how to build complete, full-stack web applications. By diving deep into the Next.js ecosystem,
            
            I am mastering both front-end UI and back-end logic within a single, powerful framework. This hands-on experience at MakTal is sharpening my skills
            
            in server-side rendering, API routing, and performance optimization to deliver seamless, production-ready websites.</p>
        
    <HeroCards/>
    <Skills/>
    
    </>
    )

}