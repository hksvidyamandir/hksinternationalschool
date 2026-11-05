import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

const grades = ["Nursery", "LKG", "UKG", ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)];

export function EnquiryForm({ title = "Admission enquiry" }: { title?: string }) {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hello HKS International School, I'd like to enquire about admission.\nParent: ${f.get("parent")}\nStudent: ${f.get("student")}\nGrade: ${f.get("grade")}\nBoarding: ${f.get("boarding")}\nPhone: ${f.get("phone")}\n${f.get("message") || ""}`;
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
      <button className="w-full rounded-full bg-primary py-3.5 font-bold text-primary-foreground hover:bg-navy transition">Send Enquiry</button>
      {sent && <p className="text-sm text-primary font-semibold">Thank you! WhatsApp has opened with your enquiry.</p>}
    </form>
  );
}
