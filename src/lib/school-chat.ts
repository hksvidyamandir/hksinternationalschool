import { SITE } from "@/lib/site";

export function schoolChatReply(question: string): string {
  const text = question.toLowerCase();
  if (/fee|cost|price|scholarship/.test(text)) {
    return `For current fees and scholarship details, please contact our admissions team on ${SITE.phone}.`;
  }
  if (/visit|tour/.test(text)) {
    return "You can request a virtual visit or campus tour using the options below. Our team will confirm the arrangements.";
  }
  if (/board|hostel|residen/.test(text)) {
    return "HKS Vidyamandir offers day and residential schooling. Explore Residential Life below, or contact our team for current boarding details.";
  }
  if (/admission|apply|enrol/.test(text)) {
    return "Admissions enquiries are open for 2026-27, from Nursery to Grade 12. Visit our Admissions page or speak with our team to discuss your child's application.";
  }
  if (/grade|class|curricul|cbse|academic|nursery/.test(text)) {
    return "HKS Vidyamandir is a CBSE school offering Nursery to Grade 12: Early Years, Primary, Middle and Senior School. Explore Academics below for more information.";
  }
  if (/where|address|location|contact|phone|email/.test(text)) {
    return `Find us at ${SITE.address}. Call ${SITE.phone} or email ${SITE.email}.`;
  }
  if (/^(hi|hello|hey)\b/.test(text)) {
    return "Hello! What would you like to know about admissions, academics, residential life or visiting HKS Vidyamandir?";
  }
  return "I can help with school information about admissions, academics, residential life and campus visits. For other questions, please speak with our team on WhatsApp below.";
}