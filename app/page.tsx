import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Users,
  Target,
  MapPin,
  Clock,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
  BrainCircuit,
  Handshake,
  TrendingUp,
  Contact,
} from "lucide-react"
import Link from "next/link"
import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import AboutUs from "@/components/AboutUs"
import WhyChoose from "@/components/WhyChoose"
import JobListing from "@/components/JobListing"
import Blog from "@/components/Blog"
import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"
import Sectors from "@/components/Sectors"
import JobCategoriesGrid from "@/components/JobCategoriesGrid"
import RecruitmentDiagram from "@/components/RecruitmentDiagram"
import RecognisedBy from "@/components/RecognisedBy"
import ResponsiveRecruitmentFlow from "@/components/ResponsiveRecruitmentFlow"
import ManPower from "@/components/ManPower"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
    <NavBar />

      {/* Hero Section */}
      <HeroSection />

      <Sectors />

      {/* About Us Section */}
     <AboutUs />

      {/* Why Choose Us Section */}
      <WhyChoose />

      {/* Job Listings Preview */}
      <JobListing />
      {/* Job Categories Grid */}
      <JobCategoriesGrid />

{/* Manpower Section */}
<ManPower />
      {/* Recruitment Process Diagram */}

      {/* <RecruitmentDiagram /> */}

      {/* Responsive Recruitment Flow */}
      <ResponsiveRecruitmentFlow />

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* Blog Section */}
      {/* <Blog /> */}

      {/* Contact Us Section */}
     {/* <ContactUs /> */}

      {/* Footer */}
      <RecognisedBy />
      <Footer />
    </div>
  )
}
