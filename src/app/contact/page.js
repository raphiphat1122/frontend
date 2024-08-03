import Image from "next/image";

export default function About() {
  return (
    <div className="container-fluid">
      <figure className="figure">
      <Image src="/assets/img/contacr2.png" layout="responsive" className="card-img-top" width={100} height={1000} alt="..." />
        <figcaption className="figure-caption"></figcaption>
      </figure>
    </div>
  );
}