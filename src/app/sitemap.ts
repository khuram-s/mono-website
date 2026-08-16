import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{const paths=["","/services","/work","/work/linkedin-outreach-crm","/work/bookkeeping-digital-foundation-concept","/about","/start-a-project","/privacy","/terms"];return paths.map(path=>({url:`${SITE_URL}${path}`,lastModified:new Date(),changeFrequency:path===""?"monthly":"yearly",priority:path===""?1:((path.includes("privacy")||path.includes("terms")) ? 0.3 : 0.8)}))}
