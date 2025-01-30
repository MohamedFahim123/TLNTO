import Image from "next/image";

export default function BlogDetailsHero() {
  return (
    <section className="section-box">
      <div>
        <Image width={1700} height={450} src="/assets/imgs/page/blog/img-single.png" alt="jobBox Hero" />
      </div>
    </section>
  );
}
