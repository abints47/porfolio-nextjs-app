import HeroCards from "@/components/HeroCards"
import Skills from "@/components/Skills"


export default function Home() {
   return (
    <>
    <h1 className="container mt-4 text-left fw-bold display-3 p-3">Hi, I'm Abin  👋</h1>
    <h2 className="container mt-4 text-left fw-bold display-5">Frontend Developer | Nextjs Developer
    </h2>
    <p className="container mt-4 text-left p-4 fw-normal fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
    
    <HeroCards/>
    <Skills/>
    
    </>
    )

}