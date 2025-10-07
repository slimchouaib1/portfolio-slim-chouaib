"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Award,
  Users,
  Mic,
  Code,
  Brain,
  Cloud,
  Database,
  ChevronDown,
  Play,
  FileText,
  Eye,
} from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function PortfolioFr() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showMemoraModal, setShowMemoraModal] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const downloadCV = () => {
    // Créer le contenu HTML pour le PDF
    const cvHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>CV - Slim Chouaib</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; color: #333; }
        .header { text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { color: #2563eb; margin: 0; font-size: 2.5em; }
        .header p { margin: 5px 0; color: #666; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; }
        .experience, .project { margin-bottom: 20px; }
        .experience h3, .project h3 { color: #1f2937; margin-bottom: 5px; }
        .company { color: #2563eb; font-weight: bold; }
        .date { color: #6b7280; font-style: italic; }
        ul { padding-left: 20px; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #eff6ff; color: #2563eb; padding: 5px 10px; border-radius: 15px; font-size: 0.9em; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Slim Chouaib</h1>
        <p>📧 slimchouaib2003@gmail.com | 📱 +216 55588192 | 📍 Manar 2, Ariana, Tunisie</p>
        <p><strong>Étudiant Ingénieur en IA & Data Science - 3ème année</strong></p>
      </div>

      <div class="section">
        <h2>À Propos de Moi</h2>
        <p>Je suis Slim Chouaib, un étudiant passionné qui vise l'excellence dans tout ce que j'entreprends. Mon ambition est de bâtir un parcours où mon nom résonne dans le domaine de la Data et de l'IA, reconnu pour mes compétences techniques et ma capacité à transformer les idées en solutions concrètes et efficaces. Je veux être quelqu'un dont les réalisations parlent d'elles-mêmes et inspirent confiance aux équipes et entreprises avec qui je collabore, et je fais cela en tant que président de Fortum Junior Entreprise, en alliant leadership et innovation au quotidien.</p>
      </div>

      <div class="section">
        <h2>Éducation</h2>
        <div class="experience">
          <h3>École Supérieure Privée des Technologies et de l'Ingénierie, TEK-UP</h3>
          <p class="company">3ème année en ingénierie, spécialité IA et science des données</p>
          <p class="date">2023 – Présent</p>
        </div>
        <div class="experience">
          <h3>École Supérieure Privée des Technologies et de l'Ingénierie, TEK-UP</h3>
          <p class="company">Cycle préparatoire intégré</p>
          <p class="date">2021-2023</p>
        </div>
      </div>

      <div class="section">
        <h2>Expérience Professionnelle</h2>
        <div class="experience">
          <h3>Développeur IA et Data Engineering</h3>
          <p class="company">BiGuard – Application d'assistant financier intelligent (chez Biware)</p>
          <p class="date">Juin – Août 2025</p>
          <ul>
            <li>Développement complet d'une application web de gestion budgétaire avec recommandations automatiques</li>
            <li>Mise en place d'un clustering intelligent pour classifier automatiquement les transactions</li>
            <li>Conception de modèles d'anomaly detection pour identifier des comportements financiers suspects</li>
            <li>Création d'un chatbot interactif pour accompagner les utilisateurs dans la gestion de leurs finances</li>
            <li>Déploiement cloud sur Microsoft Azure, intégrant API, bases de données et pipeline de traitement</li>
          </ul>
          <p><strong>Technologies :</strong> Python, Scikit-Learn, Flask, React.js, Azure, SQL, Plaid API</p>
        </div>

        <div class="experience">
          <h3>Développeur d'Application RH</h3>
          <p class="company">Banque de Financement des Petites et Moyennes Entreprises (BFPME)</p>
          <p class="date">Juin - Août 2024</p>
          <ul>
            <li>Développement d'une application de gestion des congés personnalisable</li>
            <li>Implémentation de la reconnaissance faciale pour l'authentification</li>
            <li>Personnalisation des rôles, départements et hiérarchies dans l'application</li>
          </ul>
          <p><strong>Technologies :</strong> Java, JavaFX, Scene Builder, MySQL, AWS Rekognition</p>
        </div>
      </div>

      <div class="section">
        <h2>Projets Clés</h2>
        <div class="project">
          <h3>NSM VISION 2025</h3>
          <p class="company">Plateforme SaaS de gestion et d'analyse du crédit pour les PME</p>
          <ul>
            <li>Développement d'une solution cloud pour automatiser l'analyse des risques de crédit via IA et ML</li>
            <li>Conception d'une interface intuitive avec tableaux de bord interactifs et reporting via Power BI</li>
            <li>Développement d'un chatbot intelligent pour guider les demandes de crédit</li>
          </ul>
          <p><strong>Technologies :</strong> AWS, Python, Django, React.js, MongoDB, Power BI</p>
        </div>

        <div class="project">
          <h3>MEMORA 2025</h3>
          <p class="company">Système d'aide à la décision pour le diagnostic de la maladie d'Alzheimer</p>
          <ul>
            <li>Développement d'un système pour prédire la maladie d'Alzheimer à partir de données cliniques</li>
            <li>Intégration de clustering non supervisé pour améliorer les performances des modèles</li>
            <li>Création d'une interface web avec Shiny pour la saisie des données et la prédiction</li>
          </ul>
          <p><strong>Technologies :</strong> R, Random Forest, KNN, SVM, Shiny, Python</p>
        </div>

        <div class="project">
          <h3>AI Healthcare Assistant 2025</h3>
          <p class="company">Hackathon - Assistant IA pour les professionnels de santé</p>
          <ul>
            <li>Création d'un assistant IA pour répondre aux questions médicales et assister dans les diagnostics</li>
            <li>Développement d'une application d'automatisation des flux de travail avec modèles IA</li>
            <li>Interface de gestion des tâches et automatisation des décisions</li>
          </ul>
          <p><strong>Technologies :</strong> Python, Llama, OpenAI, NLP, Hugging Face, TensorFlow, Flask</p>
        </div>
      </div>

      <div class="section">
        <h2>Compétences Techniques</h2>
        <h3>Langages de Programmation</h3>
        <div class="skills">
          <span class="skill">Python</span>
          <span class="skill">Java</span>
          <span class="skill">C++</span>
          <span class="skill">PHP</span>
          <span class="skill">R</span>
          <span class="skill">SQL</span>
        </div>
        
        <h3>Machine Learning & Deep Learning</h3>
        <div class="skills">
          <span class="skill">TensorFlow</span>
          <span class="skill">Scikit-learn</span>
          <span class="skill">PyTorch</span>
          <span class="skill">Keras</span>
          <span class="skill">XGBoost</span>
          <span class="skill">MLflow</span>
        </div>

        <h3>Frameworks Web</h3>
        <div class="skills">
          <span class="skill">Django</span>
          <span class="skill">React.js</span>
          <span class="skill">Angular</span>
          <span class="skill">Flask</span>
          <span class="skill">Symfony</span>
        </div>

        <h3>Cloud & Infrastructure</h3>
        <div class="skills">
          <span class="skill">Azure</span>
          <span class="skill">AWS</span>
          <span class="skill">Docker</span>
          <span class="skill">CI/CD</span>
        </div>

        <h3>Data & Analytics</h3>
        <div class="skills">
          <span class="skill">Power BI</span>
          <span class="skill">Tableau</span>
          <span class="skill">Hadoop</span>
          <span class="skill">Spark</span>
          <span class="skill">Kafka</span>
        </div>
      </div>

      <div class="section">
        <h2>Certifications</h2>
        <div class="experience">
          <h3>Microsoft Certified: Azure AI Fundamentals (AI-900)</h3>
          <p class="date">2025</p>
          <p>Validation des bases de l'IA sur Azure, incluant Computer Vision, NLP et services cognitifs.</p>
        </div>
        <div class="experience">
          <h3>Oracle Certified: <span class="font-bold">Oracle Cloud Infrastructure 2025 AI Foundations Associate (1Z0-1122-25)</span></h3>
          <p class="date">2025</p>
          <p>Certification avancée en infrastructure Cloud, incluant l'intégration de l'IA, <i>deep learning</i>, <i>generative AI</i>,<br /> et les solutions de <i>Machine Learning</i> sur Oracle Cloud.</p>
        </div>
        <div class="experience">
          <h3>Oracle Certified: <span class="font-bold">Oracle Cloud Infrastructure 2025 Generative AI Professional (1Z0-1127-25)</span></h3>
          <p class="date">2025</p>
          <p>Certification professionnelle avancée en IA générative sur Oracle Cloud, incluant les LLMs, RAG,<br /> agents conversationnels et l'intégration avec Oracle Database 23ai.</p>
        </div>
      </div>

      <div class="section">
        <h2>Leadership & Activités</h2>
        <div class="experience">
          <h3>Président, Fortum Junior Entreprise</h3>
          <p class="date">2024-Présent</p>
          <p>Direction de l'organisation et pilotage d'initiatives d'innovation. Organisation d'ateliers IA & Cybersécurité et hackathons.</p>
        </div>
        <div class="experience">
          <h3>Organisateur Global Game Jam 2022</h3>
          <p class="company">Gaming Lab Tek-up</p>
          <p class="date">2021-2022</p>
          <p>Organisation d'événements internationaux de développement de jeux vidéo.</p>
        </div>
      </div>

      <div class="section">
        <h2>Langues</h2>
        <div class="skills">
          <span class="skill">Français</span>
          <span class="skill">Anglais</span>
          <span class="skill">Arabe</span>
        </div>
      </div>
    </body>
    </html>
  `

    // Créer un blob avec le contenu HTML
    const blob = new Blob([cvHTML], { type: "text/html" })
    const url = URL.createObjectURL(blob)

    // Créer un lien temporaire pour télécharger
    const link = document.createElement("a")
    link.href = url
    link.download = "CV_Slim_Chouaib.html"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    // Ouvrir dans une nouvelle fenêtre pour impression PDF
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(cvHTML)
      printWindow.document.close()

      // Attendre que le contenu soit chargé puis déclencher l'impression
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print()
        }, 500)
      }
    }
  }

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "education"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Email Provider Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[90vw] max-w-md animate-fade-in">
            <h2 className="text-xl font-bold mb-4 text-slate-800 text-center">Choisissez votre service d'email</h2>
            <div className="flex flex-col gap-3">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:scale-105 transition-transform"
                onClick={() => {
                  window.open('https://outlook.live.com/mail/0/deeplink/compose?to=slimchouaib2003@gmail.com&subject=Contact%20depuis%20portfolio', '_blank');
                  setShowEmailModal(false);
                }}
              >
                <Mail className="w-5 h-5" /> Outlook
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium hover:scale-105 transition-transform"
                onClick={() => {
                  window.open('https://mail.google.com/mail/?view=cm&to=slimchouaib2003@gmail.com&su=Contact%20depuis%20portfolio', '_blank');
                  setShowEmailModal(false);
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 13.065L2.4 6.6A2 2 0 0 1 4 4h16a2 2 0 0 1 1.6 2.6l-9.6 6.465z"/><path d="M22 8.235V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.235l9.6 6.465a2 2 0 0 0 2.4 0L22 8.235z"/></svg>
                Gmail
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium hover:scale-105 transition-transform"
                onClick={() => {
                  window.open('https://compose.mail.yahoo.com/?to=slimchouaib2003@gmail.com&subj=Contact%20depuis%20portfolio', '_blank');
                  setShowEmailModal(false);
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4v16h20V4H2zm18 2v2.586l-8 8-8-8V6h16zm0 12H4v-7.414l8 8 8-8V18z"/></svg>
                Yahoo
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 text-white font-medium hover:scale-105 transition-transform"
                onClick={() => {
                  window.open('mailto:slimchouaib2003@gmail.com?subject=Contact%20depuis%20portfolio', '_blank');
                  setShowEmailModal(false);
                }}
              >
                <Mail className="w-5 h-5" /> Autre (App par défaut)
              </button>
            </div>
            <button
              className="mt-6 w-full py-2 rounded-lg bg-slate-200 text-slate-700 font-medium hover:bg-slate-300 transition-colors"
              onClick={() => setShowEmailModal(false)}
            >
              Annuler
            </button>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation fixe */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Slim Chouaib
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: "Accueil" },
                { id: "about", label: "À Propos" },
                { id: "experience", label: "Expérience" },
                { id: "projects", label: "Projets" },
                { id: "skills", label: "Compétences" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowCVModal(true)}
                className="inline-flex items-center border border-slate-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Eye className="w-4 h-4 mr-2" />
                Prévisualiser CV
              </button>
              <button
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ textDecoration: 'none' }}
                onClick={() => setShowEmailModal(true)}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section Hero avec animation */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Président Fortum Junior Entreprise
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Slim
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                  Chouaib
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Étudiant Ingénieur en <span className="font-semibold text-blue-600">IA & Data Science</span>
              </p>

              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                Passionné par la construction de solutions IA innovantes et la transformation d'idées en applications
                concrètes et efficaces. Actuellement en 3ème année d'ingénierie, alliant leadership et innovation au
                quotidien.
              </p>
            </div>

            {/* Informations de contact avec animations */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
                <span>slimchouaib2003@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
                <span>+216 55588192</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5" />
                <span>Manar 2, Ariana, Tunisie</span>
              </div>
            </div>

            {/* Technologies principales */}
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "R", "Machine Learning", "Deep Learning", "Azure", "Sql/NoSql", "Data Engineering", "Data Science", "Leadership"
              ].map((tech, index) => (
                <Badge
                  key={tech}
                  className={`px-3 py-1 hover:scale-105 transition-transform cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform"
                onClick={() => scrollToSection("projects")}
              >
                Voir mes projets
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-transform bg-transparent"
                onClick={() => scrollToSection("about")}
              >
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Photo professionnelle avec effets */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              {/* Cercles décoratifs animés */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

              {/* Photo principale */}
              <div className="relative z-10 w-80 h-80 mx-auto">
                <Image
                  src="/images/slim-portrait.jpg"
                  alt="Slim Chouaib - Portrait professionnel"
                  fill
                  className="rounded-2xl object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'top' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* Section À Propos */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">À Propos de Moi</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Je suis un étudiant passionné qui vise l'excellence dans tout ce que j'entreprends. Mon ambition est de
                bâtir un parcours où mon nom résonne dans le domaine de la{" "}
                <span className="font-semibold text-blue-600">Data et de l'IA</span>, reconnu pour mes compétences
                techniques et ma capacité à transformer les idées en solutions concrètes et efficaces.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Je veux être quelqu'un dont les réalisations parlent d'elles-mêmes et inspirent confiance aux équipes et
                entreprises avec qui je collabore. En tant que{" "}
                <span className="font-semibold text-blue-600">Président de Fortum Junior Entreprise</span>, j'allie
                leadership et innovation au quotidien, dirigeant des projets qui ont un impact réel.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg hover:scale-105 transition-transform">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-800">Développement</h3>
                  <p className="text-sm text-slate-600">Full-Stack & IA</p>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg hover:scale-105 transition-transform">
                  <Users className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-800">Leadership</h3>
                  <p className="text-sm text-slate-600">Président FJE</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/award-ceremony.png"
                alt="Slim Chouaib recevant un prix lors de l'événement TEK-UP Clubs 2025"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium">TEK-UP Clubs Event 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expérience */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Expérience Professionnelle</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Développeur IA et Data Engineering</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">BiGuard - Biware</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-blue-50">
                    Juin - Août 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 font-medium">Application d'Assistant Financier Intelligent</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
                  <li>
                    Développement complet d'une application web de gestion budgétaire avec recommandations automatiques
                  </li>
                  <li>Mise en place d'un clustering intelligent pour classifier automatiquement les transactions</li>
                  <li>
                    Conception de modèles d'anomaly detection pour identifier des comportements financiers suspects
                  </li>
                  <li>Création d'un chatbot interactif pour accompagner les utilisateurs</li>
                  <li>Déploiement cloud sur Microsoft Azure avec APIs, bases de données et pipelines</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Scikit-Learn", "Flask", "React.js", "Azure", "SQL", "Plaid API"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Développeur d'Application RH</CardTitle>
                    <CardDescription className="text-lg font-medium text-green-600">
                      Banque de Financement des PME (BFPME)
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-green-50">
                    Juin - Août 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
                  <li>Développement d'une application de gestion des congés personnalisable</li>
                  <li>Implémentation de la reconnaissance faciale pour l'authentification</li>
                  <li>Personnalisation des rôles, départements et hiérarchies</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Java", "JavaFX", "MySQL", "AWS Rekognition"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Projets Clés</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Brain className="w-6 h-6" />
                  NSM VISION 2025
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Plateforme SaaS de gestion et d'analyse du crédit pour les PME
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 mb-4">
                  <li>Solution cloud pour automatiser l'analyse des risques de crédit via IA et ML</li>
                  <li>Tableaux de bord interactifs et reporting via Power BI</li>
                  <li>Chatbot intelligent pour guider les demandes de crédit</li>
                  <li>Architecture évolutive et sécurisée</li>
                </ul>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["AWS", "Python", "Django", "React.js", "MongoDB", "Power BI"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href="https://github.com/slimchouaib1/NSM-Vision-AI-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center border border-blue-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent group-hover:bg-blue-50"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le projet
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Database className="w-6 h-6" />
                  MEMORA 2025
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Système d'aide à la décision pour le diagnostic d'Alzheimer
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 mb-4">
                  <li>Prédiction de la maladie d'Alzheimer à partir de données cliniques</li>
                  <li>Clustering non supervisé pour améliorer les performances</li>
                  <li>Interface web avec Shiny pour la saisie et prédiction</li>
                </ul>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["R", "Random Forest", "KNN", "SVM", "Shiny", "Python"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/slimchouaib1/Memora-R-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center flex-1 justify-center border border-purple-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent group-hover:bg-purple-50"
                    style={{ textDecoration: 'none' }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
                  </a>
                  <button
                    onClick={() => setShowMemoraModal(true)}
                    className="inline-flex items-center flex-1 justify-center border border-purple-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-purple-500 text-white hover:bg-purple-600"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Voir le rapport
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Brain className="w-6 h-6" />
                  AI Healthcare Assistant
                </CardTitle>
                <CardDescription className="text-green-100">
                  Hackathon - Assistant IA pour les professionnels de santé
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 mb-4">
                  <li>Assistant IA pour répondre aux questions médicales</li>
                  <li>Automatisation des flux de travail avec modèles IA</li>
                  <li>Interface de gestion des tâches et automatisation des décisions</li>
                </ul>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Python", "Llama", "OpenAI", "NLP", "TensorFlow", "Flask"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href="https://github.com/slimchouaib1/AI-ARTSS-Hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center border border-green-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent group-hover:bg-green-50"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le projet
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Cloud className="w-6 h-6" />
                  BiGuard Application
                </CardTitle>
                <CardDescription className="text-orange-100">Assistant Financier Intelligent avec ML</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 mb-4">
                  <li>Gestion budgétaire avec recommandations automatiques</li>
                  <li>Classification intelligente des transactions par clustering</li>
                  <li>Détection d'anomalies pour comportements suspects</li>
                  <li>Chatbot interactif pour guidance financière</li>
                </ul>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Python", "Scikit-Learn", "Flask", "React.js", "Azure"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/slimchouaib1/BiGuard-AI-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center flex-1 justify-center border border-orange-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent group-hover:bg-orange-50"
                    style={{ textDecoration: 'none' }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
                  </a>
                  <button
                    onClick={() => setShowDemoModal(true)}
                    className="inline-flex items-center flex-1 justify-center border border-orange-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-orange-500 text-white hover:bg-orange-600"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Voir la démo
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Compétences Techniques</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Langages de Programmation
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "PHP", "R", "SQL"].map((lang) => (
                    <Badge key={lang} className="hover:scale-105 transition-transform bg-blue-100 text-blue-800">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  ML & Deep Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "Scikit-learn", "PyTorch", "Keras", "XGBoost", "MLflow", "LightGBM"].map((tool) => (
                    <Badge key={tool} className="hover:scale-105 transition-transform bg-purple-100 text-purple-800">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Frameworks Web
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["Django", "React.js", "Angular", "Flask", "Symfony", "Bootstrap"].map((framework) => (
                    <Badge key={framework} className="hover:scale-105 transition-transform bg-green-100 text-green-800">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  Cloud & Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["Azure", "AWS", "Docker", "CI/CD", "SaaS Architecture"].map((cloud) => (
                    <Badge key={cloud} className="hover:scale-105 transition-transform bg-orange-100 text-orange-800">
                      {cloud}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Data & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["Power BI", "Tableau", "Hadoop", "Spark", "Kafka", "ETL"].map((data) => (
                    <Badge key={data} className="hover:scale-105 transition-transform bg-indigo-100 text-indigo-800">
                      {data}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  IA & NLP
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["GPT", "BERT", "Hugging Face", "SpaCy", "Computer Vision", "Transformers", "OpenAI"].map((ai) => (
                    <Badge key={ai} className="hover:scale-105 transition-transform bg-pink-100 text-pink-800">
                      {ai}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Leadership & Activités */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Leadership & Activités</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <Card className="border-l-4 border-l-purple-500 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Président, Fortum Junior Entreprise
                  </CardTitle>
                  <CardDescription>2024 - Présent</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Direction de l'organisation et pilotage d'initiatives d'innovation. Organisation récente d'ateliers
                    IA & Cybersécurité et hackathons, supervision d'événements techniques et coordination d'équipes.
                  </p>
                </CardContent>
              </Card>
            

              <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Mic className="w-5 h-5 text-orange-600" />
                    Organisateur Global Game Jam
                  </CardTitle>
                  <CardDescription>2021 - 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Organisation d'événements internationaux de développement de jeux vidéo au sein du Gaming Lab
                    Tek-up, gestion de la logistique et animation d'équipes de développeurs du monde entier.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <Image
                src="/images/team-photo.jpeg"
                alt="Équipe Fortum Junior Entreprise avec Slim Chouaib"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-medium">Équipe FJE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/speaking-event.png"
                alt="Slim Chouaib présentant lors de l'événement TEK-UP"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">Conférencier</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <Card className="border-l-4 border-l-red-500 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Responsable Communication</CardTitle>
                  <CardDescription>Interact Club Hannibal (2019-2021)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Direction des stratégies de communication et initiatives de sensibilisation communautaire,
                    développement de compétences en leadership et organisation à travers des projets de service.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-teal-500 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Événements Récents</CardTitle>
                  <CardDescription>2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Organisation de l'événement Fortum Junior Entreprise IA & Cybersécurité avec ateliers et hackathon
                    de 12h, démonstrant des capacités de gestion d'événements et de leadership technique.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section Éducation & Certifications */}
      {/* Section Éducation */}
      <section id="education" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Éducation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg flex flex-col h-full justify-between">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">3A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Ingénierie IA et Data Science</h4>
                    <p className="text-slate-600">TEK-UP - École Supérieure Privée des Technologies</p>
                    <p className="text-sm text-slate-500">2023 - Présent (3ème Année)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg flex flex-col h-full justify-between">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">CP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Cycle Préparatoire Intégré</h4>
                    <p className="text-slate-600">TEK-UP</p>
                    <p className="text-sm text-slate-500">2021 - 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

 <section id="certifications" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
      {/* Azure Certification Card */}
      <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Cloud className="w-8 h-8 text-blue-600" />
            Microsoft Certified: Azure AI Fundamentals (AI-900)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <Cloud className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-lg">
                Microsoft Certified: Azure AI Fundamentals (AI-900)
              </h4>
              <p className="text-blue-500 font-medium">2025</p>
              <p className="text-slate-500 text-sm mt-2">
                Validation des bases de l'IA sur Azure, incluant Computer Vision, NLP et services cognitifs.
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <Badge className="bg-blue-100 text-blue-800">Cloud</Badge>
                <Badge className="bg-blue-100 text-blue-800">AI</Badge>
                <Badge className="bg-blue-100 text-blue-800">Machine Learning</Badge>
                <Badge className="bg-blue-100 text-blue-800">NLP</Badge>
                <Badge className="bg-blue-100 text-blue-800">Computer Vision</Badge>
                <Badge className="bg-blue-100 text-blue-800">Generative AI</Badge>
                <Badge className="bg-blue-100 text-blue-800">Azure</Badge>
              </div>
              <a
                href="/Azure-AI-900.pdf"
                download
                className="inline-flex items-center border border-blue-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-blue-50 mt-4"
                style={{ textDecoration: 'none' }}
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger le certificat
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Oracle Generative AI Professional Certification Card */}
      <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Brain className="w-8 h-8 text-red-600" />
            Oracle Cloud Infrastructure 2025 Generative AI Professional (1Z0-1127-25)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
              <Brain className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-lg">
                Oracle Cloud Infrastructure 2025 Generative AI Professional (1Z0-1127-25)
              </h4>
              <p className="text-red-600 font-medium">2025</p>
              <p className="text-slate-500 text-sm mt-2">
                Certification professionnelle avancée en IA générative sur Oracle Cloud, incluant les LLMs, RAG, 
                agents conversationnels et l'intégration avec Oracle Database 23ai.
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <Badge className="bg-red-100 text-red-800">Generative AI</Badge>
                <Badge className="bg-red-100 text-red-800">LLMs</Badge>
                <Badge className="bg-red-100 text-red-800">RAG</Badge>
                <Badge className="bg-red-100 text-red-800">AI Agents</Badge>
                <Badge className="bg-red-100 text-red-800">Oracle Cloud</Badge>
                <Badge className="bg-red-100 text-red-800">LangChain</Badge>
              </div>
              <a
                href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=4C8B0E6E2B7A8E2A4E5E9F8F7E6E5E4E3E2E1E0E9F8F7E6E5E4E3E2E1E0E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-red-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-red-50 mt-4"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir le certificat
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Oracle AI Foundations Certification Card */}
      <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Cloud className="w-8 h-8 text-orange-500" />
            Oracle Cloud Infrastructure 2025 AI Foundations Associate (1Z0-1122-25)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
              <Cloud className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-lg">
                Oracle Cloud Infrastructure 2025 AI Foundations Associate (1Z0-1122-25)
              </h4>
              <p className="text-orange-500 font-medium">2025</p>
              <p className="text-slate-500 text-sm mt-2">
                Certification avancée en infrastructure Cloud, incluant l'intégration de l'IA, <i>deep learning</i>, <i>generative AI</i>,<br /> et les solutions de <i>Machine Learning</i> sur Oracle Cloud.
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <Badge className="bg-orange-100 text-orange-800">Cloud</Badge>
                <Badge className="bg-orange-100 text-orange-800">AI</Badge>
                <Badge className="bg-orange-100 text-orange-800">Machine Learning</Badge>
                <Badge className="bg-orange-100 text-orange-800">Deep Learning</Badge>
                <Badge className="bg-orange-100 text-orange-800">Generative AI</Badge>
                <Badge className="bg-orange-100 text-orange-800">Oracle</Badge>
              </div>
              <a
                href="/Oracle-AI-Foundations.pdf"
                download
                className="inline-flex items-center border border-orange-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-orange-50 mt-4"
                style={{ textDecoration: 'none' }}
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger le certificat
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Neo4j Certification Card */}
      <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Database className="w-8 h-8 text-green-600" />
            Neo4j Certified Professional
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
              <Database className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-lg">
                Neo4j Certified Professional
              </h4>
              <p className="text-green-600 font-medium">2025</p>
              <p className="text-slate-500 text-sm mt-2">
                Certification professionnelle Neo4j validant l'expertise en bases de données graphiques, 
                requêtes Cypher, modélisation de données relationnelles et développement d'applications graphiques.
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <Badge className="bg-green-100 text-green-800">Graph Database</Badge>
                <Badge className="bg-green-100 text-green-800">Cypher</Badge>
                <Badge className="bg-green-100 text-green-800">Neo4j</Badge>
                <Badge className="bg-green-100 text-green-800">Data Modeling</Badge>
                <Badge className="bg-green-100 text-green-800">Graph Analytics</Badge>
                <Badge className="bg-green-100 text-green-800">NoSQL</Badge>
              </div>
              <a
                href="https://graphacademy.neo4j.com/c/190d2bf2-ecea-49cb-a10f-683b4f4f8ca4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-green-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-green-50 mt-4"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir le certificat
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* Section Contact */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Travaillons Ensemble</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Je suis toujours intéressé par de nouvelles opportunités et des projets stimulants. Discutons de la façon
            dont je peux contribuer au succès de votre équipe.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="https://outlook.live.com/mail/0/deeplink/compose?to=slimchouaib2003@gmail.com&subject=Contact%20depuis%20portfolio"
              className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ textDecoration: 'none' }}
            >
              <Mail className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-300">slimchouaib2003@gmail.com</p>
            </a>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <Phone className="w-8 h-8 mb-4 text-green-400" />
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-slate-300">+216 55588192</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <MapPin className="w-8 h-8 mb-4 text-red-400" />
              <h3 className="font-semibold mb-2">Localisation</h3>
              <p className="text-slate-300">Manar 2, Ariana, Tunisie</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <button
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md px-6 py-3 text-lg font-medium hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ textDecoration: 'none' }}
              onClick={() => setShowEmailModal(true)}
            >
              <Mail className="w-5 h-5 mr-2" />
              Me Contacter
            </button>
            <button
              onClick={() => setShowCVModal(true)}
              className="inline-flex items-center border border-slate-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Eye className="w-4 h-4 mr-2" />
              Prévisualiser CV
            </button>
            <a
              href="https://github.com/slimchouaib1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-slate-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ textDecoration: 'none' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.687 0 3.842-2.337 4.688-4.566 4.937.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/slim-chouaib-824a44351"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-slate-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ textDecoration: 'none' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-2"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Slim Chouaib. Tous droits réservés.</p>
        </div>
      </footer>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-slate-800">BiGuard - Démo de l'Application</h3>
              <button
                onClick={() => setShowDemoModal(false)}
                className="text-slate-500 hover:text-slate-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <video
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
                style={{ maxHeight: '70vh' }}
              >
                <source src="/Biguard Demo.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Memora PDF Modal */}
      {showMemoraModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-slate-800">MEMORA 2025 - Rapport du Projet</h3>
              <button
                onClick={() => setShowMemoraModal(false)}
                className="text-slate-500 hover:text-slate-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <iframe
                src="/Rapport.pdf"
                className="w-full rounded-lg"
                style={{ height: '75vh' }}
                title="Rapport MEMORA 2025"
              />
            </div>
          </div>
        </div>
      )}

      {/* CV Preview Modal */}
      {showCVModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-slate-50">
              <h3 className="text-xl font-semibold text-slate-800">CV Preview - Slim Chouaib</h3>
              <div className="flex items-center gap-3">
                <a
                  href="/SlimChouaib-CV.pdf"
                  download
                  className="inline-flex items-center bg-blue-600 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
                <a
                  href="/SlimChouaib-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-slate-300 rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in New Tab
                </a>
                <button
                  onClick={() => setShowCVModal(false)}
                  className="text-slate-500 hover:text-slate-700 text-2xl font-bold ml-2"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4">
              <iframe
                src="/SlimChouaib-CV.pdf"
                className="w-full rounded-lg border"
                style={{ height: '75vh' }}
                title="CV Slim Chouaib"
              />
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
