import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { SplitHeading } from "../components/SplitTextHeading";
import { Reveal } from '../components/RevealAnimation'


export function meta({}: Route.MetaArgs) {
  return [
    { title: "AiResumeReviewer" },
    { name: "description", content: "Smart Feedback for your dream job!" },
  ];
}

export default function Home() {

  const {auth} = usePuterStore();
  

  const navigate = useNavigate();

  useEffect( () => { if(!auth.isAuthenticated) navigate('/auth?next=/');


    },[auth.isAuthenticated]

  );






  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar/>
    

    <section className="main-section">

      <div className="page-heading py-16">

        <Reveal><h1 className="section-title">Track your Applications & Resume Ratings</h1></Reveal>
          
          <h2>Review your submissions and check AI-Powered Feedback</h2>
          <SplitHeading>Animations that feel effortless with GSAP</SplitHeading>
        
      </div>

    

    {resumes.length >0 && (

       <div className="resumes-section">
          { resumes.map( (resume) =>(

            <ResumeCard key = {resume.id} resume={resume}/>

          ) )
          }

        </div>


    )}
   
    </section>
    

  </main>



}
