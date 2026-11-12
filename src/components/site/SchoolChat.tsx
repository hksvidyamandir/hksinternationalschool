import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { schoolChatReply } from "@/lib/school-chat";
import { SITE } from "@/lib/site";

type Message = { role: "assistant" | "user"; text: string };

export function SchoolChat() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Welcome to HKS Vidyamandir! How can I help you today?" },
  ]);
  const history = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) history.current?.scrollTo({ top: history.current.scrollHeight });
  }, [messages, open]);

  function ask(question: string) {
    const text = question.trim();
    if (!text) return;
    setMessages((current) => [...current, { role: "user", text }, { role: "assistant", text: schoolChatReply(text) }]);
    setDraft("");
  }
  function submit(event: FormEvent) {
    event.preventDefault();
    ask(draft);
  }

  const close = () => setOpen(false);
  return (
    <div className="fixed bottom-5 right-3 z-40 md:right-5">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button size="icon" aria-label={open ? "Close school chat" : "Open school chat"} title="School chat" className="h-12 w-12 rounded-full shadow-soft md:h-14 md:w-14 [&_svg]:size-6">
            {open ? <X aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" align="end" sideOffset={12} collisionPadding={12} aria-label="HKS Vidyamandir school chat" className="flex max-h-[calc(100dvh-100px)] w-[min(380px,calc(100vw-24px))] flex-col overflow-hidden rounded-lg p-0 shadow-soft motion-reduce:animate-none">
          <div className="flex items-center justify-between gap-3 bg-navy px-4 py-4 text-navy-foreground">
            <div className="min-w-0">
              <p className="font-bold">HKS Vidyamandir</p>
              <p className="mt-1 text-xs">School information assistant</p>
            </div>
            <Button variant="ghost" size="icon" onClick={close} aria-label="Close chat window" className="shrink-0 text-navy-foreground"><X /></Button>
          </div>
          <div ref={history} role="log" aria-label="Chat messages" aria-live="polite" aria-relevant="additions" className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-background p-4 h-64">
            {messages.map((message, index) => (
              <p key={index} className={`w-fit max-w-[92%] break-words rounded-lg px-3 py-2.5 text-sm leading-relaxed ${message.role === "user" ? "ml-auto bg-navy text-navy-foreground" : "border border-border bg-card text-foreground"}`}>
                <span className="sr-only">{message.role === "user" ? "You: " : "School assistant: "}</span>{message.text}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
            {["Admissions", "Campus visit", "Boarding"].map((topic) => <Button key={topic} variant="outline" size="sm" onClick={() => ask(topic)}>{topic}</Button>)}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 px-4 pb-3 text-xs font-semibold text-navy">
            <Link to="/admissions" onClick={close}>Admissions</Link>
            <Link to="/academics" onClick={close}>Academics</Link>
            <Link to="/boarding" onClick={close}>Residential Life</Link>
            <Link to="/contact" search={{ visit: "virtual" }} onClick={close}>Virtual visit</Link>
            <Link to="/contact" search={{ visit: "tour" }} onClick={close}>Campus tour</Link>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Speak with our team ↗</a>
          </div>
          <form onSubmit={submit} className="flex shrink-0 gap-2 border-t border-border bg-card p-3">
            <Input aria-label="Your message" placeholder="Ask about HKS…" value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={500} className="h-11 min-w-0" />
            <Button type="submit" size="icon" aria-label="Send message" disabled={!draft.trim()} className="h-11 w-11 shrink-0"><Send /></Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}