import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const grades = ["Nursery", "LKG", "UKG", ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)];

const visitLabels = { virtual: "Virtual visit (online)", tour: "Campus tour (on campus)" } as const;

export function EnquiryForm({ title = "Admission enquiry", visit }: { title?: string; visit?: keyof typeof visitLabels | undefined }) {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hello HKS Vidyamandir, I'd like to enquire about admission.\nParent: ${f.get("parent")}\nStudent: ${f.get("student")}\nGrade: ${f.get("grade")}\nBoarding: ${f.get("boarding")}\nPhone: ${f.get("phone")}${visit ? `\nVisit requested: ${visitLabels[visit]}` : ""}\n${f.get("message") || ""}`;
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  }
  const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring";
  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-card p-7 md:p-9 shadow-soft space-y-4">
      <h2 className="text-3xl font-semibold text-navy">{title}</h2>
      <p className="text-sm text-muted-foreground">Submit and we'll connect with you on WhatsApp right away.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="parent" required maxLength={80} placeholder="Parent's name" className={field} />
        <input name="phone" required type="tel" pattern="[0-9+ ]{10,15}" placeholder="Phone number" className={field} />
        <input name="student" required maxLength={80} placeholder="Student's name" className={field} />
        <select name="grade" required className={field} defaultValue=""><option value="" disabled>Grade applying for</option>{grades.map((g) => <option key={g}>{g}</option>)}</select>
      </div>
      <select name="boarding" className={field} defaultValue="Day scholar"><option>Day scholar</option><option>Full boarding</option><option>Flexi-boarding (weekdays)</option></select>
      <textarea name="message" rows={3} maxLength={500} placeholder="Message (optional)" className={field} />
      <Button type="submit" className="h-auto w-full rounded-full py-3.5 font-bold">Send Enquiry</Button>
      {sent && <p className="text-sm text-primary font-semibold">Thank you! WhatsApp has opened with your enquiry.</p>}
    </form>
  );
}
