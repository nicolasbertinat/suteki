import { Metadata } from "next"
import { agentData } from "@/lib/agent-data"
import { Bot, MapPin, Clock, Phone, Utensils, Calendar, GraduationCap, HelpCircle, Code, Copy, Check } from "lucide-react"
import { CopyButton } from "./copy-button"

export const metadata: Metadata = {
  title: "Agent Mode | Suteki",
  description: "Structured data for AI agents to read and serve Suteki information to users",
  robots: "noindex, nofollow",
}

export default function AgentPage() {
  const jsonData = JSON.stringify(agentData, null, 2)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff00] font-mono">
      {/* Header */}
      <header className="border-b border-[#00ff00]/30 px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bot className="h-6 w-6" />
            <span className="text-lg font-bold">SUTEKI // AGENT MODE</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#00ff00]/60">
            <span>v{agentData.forAgents.dataVersion}</span>
            <span>|</span>
            <span>Updated: {agentData.forAgents.lastUpdated}</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Intro */}
        <section className="mb-12 rounded border border-[#00ff00]/30 bg-[#00ff00]/5 p-6">
          <h1 className="mb-4 text-2xl font-bold">AI Agent Data Interface</h1>
          <p className="mb-4 text-[#00ff00]/80 leading-relaxed">
            Esta pagina contiene datos estructurados optimizados para agentes de IA. 
            Podes copiar el JSON completo o explorar las secciones individuales.
            Usa esta informacion para responder consultas de usuarios sobre Suteki.
          </p>
          <div className="flex flex-wrap gap-4">
            <CopyButton text={jsonData} label="Copiar JSON Completo" />
            <a 
              href="/" 
              className="inline-flex items-center gap-2 rounded border border-[#00ff00]/50 px-4 py-2 text-sm transition-colors hover:bg-[#00ff00]/10"
            >
              Volver al sitio
            </a>
          </div>
        </section>

        {/* Agent Instructions */}
        <section className="mb-8 rounded border border-[#00ff00]/30 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Code className="h-5 w-5" />
            <h2 className="text-lg font-bold">SYSTEM PROMPT / INSTRUCCIONES</h2>
          </div>
          <pre className="whitespace-pre-wrap rounded bg-black/50 p-4 text-sm text-[#00ff00]/90 leading-relaxed">
            {agentData.forAgents.instructions}
          </pre>
        </section>

        {/* Restaurant Info */}
        <section className="mb-8 rounded border border-[#00ff00]/30 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Utensils className="h-5 w-5" />
            <h2 className="text-lg font-bold">RESTAURANT INFO</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-[#00ff00]/60 text-xs uppercase">Nombre</p>
              <p className="text-lg">{agentData.restaurant.name}</p>
            </div>
            <div>
              <p className="text-[#00ff00]/60 text-xs uppercase">Tipo</p>
              <p>{agentData.restaurant.type}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-[#00ff00]/60 text-xs uppercase">Descripcion</p>
              <p className="text-[#00ff00]/90">{agentData.restaurant.description}</p>
            </div>
            <div>
              <p className="text-[#00ff00]/60 text-xs uppercase">Cocinas</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {agentData.restaurant.cuisine.map((c) => (
                  <span key={c} className="rounded bg-[#00ff00]/20 px-2 py-0.5 text-xs">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#00ff00]/60 text-xs uppercase">Rango de Precios</p>
              <p>{agentData.restaurant.priceRange} ({agentData.restaurant.currency})</p>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="mb-8 rounded border border-[#00ff00]/30 p-6">
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <h2 className="text-lg font-bold">SUCURSALES ({agentData.locations.length})</h2>
          </div>
          <div className="grid gap-4">
            {agentData.locations.map((loc) => (
              <div key={loc.id} className="rounded border border-[#00ff00]/20 bg-black/30 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-bold">{loc.name}</h3>
                  <span className="rounded bg-[#00ff00]/20 px-2 py-0.5 text-xs">{loc.zone}</span>
                </div>
                <div className="grid gap-2 text-sm text-[#00ff00]/80 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-start gap-2 md:col-span-2">
                    <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <div>
                      {loc.hours.lunch && (
                        <p>Almuerzo: {loc.hours.lunch.days} {loc.hours.lunch.time}</p>
                      )}
                      {loc.hours.dinner && (
                        <p>Cena: {loc.hours.dinner.days} {loc.hours.dinner.time}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Highlights */}
        <section className="mb-8 rounded border border-[#00ff00]/30 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Utensils className="h-5 w-5" />
            <h2 className="text-lg font-bold">MENU HIGHLIGHTS</h2>
          </div>
          {agentData.menu.categories.map((cat) => (
            <div key={cat.name} className="mb-6 last:mb-0">
              <h3 className="mb-2 font-bold text-[#00ff00]">{cat.name}</h3>
              <p className="mb-3 text-sm text-[#00ff00]/60">{cat.description}</p>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between rounded bg-black/30 p-3 text-sm">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      {item.spicy && <span className="ml-2 text-red-400">picante</span>}
                      {item.vegetarian && <span className="ml-2 text-green-400">vegetariano</span>}
                      <p className="mt-1 text-[#00ff00]/70">{item.description}</p>
                    </div>
                    <span className="flex-shrink-0 font-bold">${item.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-4 rounded bg-[#00ff00]/10 p-3 text-xs text-[#00ff00]/70">
            {agentData.menu.notes.map((note, i) => (
              <p key={i}>* {note}</p>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-8 grid gap-6 md:grid-cols-2">
          {/* Events */}
          <div className="rounded border border-[#00ff00]/30 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <h2 className="text-lg font-bold">EVENTOS</h2>
            </div>
            <p className="mb-4 text-sm text-[#00ff00]/80">{agentData.services.events.description}</p>
            <div className="space-y-2">
              {agentData.services.events.types.map((t) => (
                <div key={t.name} className="rounded bg-black/30 p-3 text-sm">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-[#00ff00]/70">{t.description}</p>
                  <p className="text-xs text-[#00ff00]/50 mt-1">Min: {t.minPeople} personas</p>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="rounded border border-[#00ff00]/30 p-6">
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              <h2 className="text-lg font-bold">CURSOS</h2>
            </div>
            <p className="mb-4 text-sm text-[#00ff00]/80">{agentData.services.courses.description}</p>
            <div className="space-y-2">
              {agentData.services.courses.levels.map((c) => (
                <div key={c.name} className="rounded bg-black/30 p-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">{c.name}</span>
                    <span className="font-bold">${c.price.toLocaleString()}</span>
                  </div>
                  <p className="text-[#00ff00]/70 text-xs mt-1">{c.duration} | {c.topics.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8 rounded border border-[#00ff00]/30 p-6">
          <div className="mb-4 flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            <h2 className="text-lg font-bold">FAQ ({agentData.faq.length})</h2>
          </div>
          <div className="space-y-3">
            {agentData.faq.map((f, i) => (
              <div key={i} className="rounded bg-black/30 p-4">
                <p className="font-medium text-[#00ff00]">Q: {f.question}</p>
                <p className="mt-1 text-sm text-[#00ff00]/80">A: {f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Raw JSON */}
        <section className="rounded border border-[#00ff00]/30 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              <h2 className="text-lg font-bold">RAW JSON</h2>
            </div>
            <CopyButton text={jsonData} label="Copiar" />
          </div>
          <pre className="max-h-96 overflow-auto rounded bg-black p-4 text-xs leading-relaxed">
            {jsonData}
          </pre>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#00ff00]/30 px-6 py-4 text-center text-xs text-[#00ff00]/50">
        <p>SUTEKI AGENT DATA INTERFACE | FOR AI CONSUMPTION ONLY</p>
        <p className="mt-1">
          <a href="/" className="underline hover:text-[#00ff00]">Back to human version</a>
        </p>
      </footer>
    </div>
  )
}
