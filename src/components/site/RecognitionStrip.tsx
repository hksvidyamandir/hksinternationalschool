import gree from "@/assets/recognitions/gree.asset.json";
import cbse from "@/assets/recognitions/cbse.asset.json";
import microsoft from "@/assets/recognitions/microsoft.asset.json";
import fit from "@/assets/recognitions/fit-india.asset.json";

const recognitions = [
  { name: "GREE", detail: "Global Research for Excellence in Education", image: gree.url },
  { name: "CBSE", detail: "Central Board of Secondary Education", image: cbse.url },
  { name: "Microsoft", detail: "Showcase School", image: microsoft.url },
  { name: "Fit India", detail: "Fit India School", image: fit.url },
];

export function RecognitionStrip() {
  return <section className="recognition-strip" aria-labelledby="recognition-title">
    <div className="container-site">
      <div className="recognition-heading"><span className="home-kicker">Our recognitions</span><h2 id="recognition-title">Accreditations &amp; recognition</h2></div>
      <ul className="recognition-logos">
        {recognitions.map(item => <li key={item.name}><div className="recognition-image"><img src={item.image} alt={`${item.name} logo`} loading="lazy" /></div><h3>{item.name}</h3><p>{item.detail}</p></li>)}
      </ul>
    </div>
  </section>;
}