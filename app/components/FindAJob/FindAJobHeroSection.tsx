import { useIndustriesStore } from "@/app/store/Industries";
import { DefaultValues } from "./FindAJobMainPage";
import { useCitiesInsideCurrRegionStore } from "@/app/store/CurrCitiesInsideCurrRegion";

export default function FindAJobHeroSection({
  defaultValues,
  handleChange,
}: {
  defaultValues: DefaultValues;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}) {
  const { industries } = useIndustriesStore();
  const { citiesInsideCurrRegion } = useCitiesInsideCurrRegionStore();
  return (
    <section className="section-box-2">
      <div className="container">
        <div className="banner-hero banner-single banner-single-bg">
          <div className="block-banner text-center">
            <h3 className="wow animate__animated animate__fadeInUp">
              <span className="color-brand-2">22 Jobs</span> Available Now
            </h3>
            <div
              className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp"
              data-wow-delay=".1s"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              repellendus magni, <br className="d-none d-xl-block" />
              atque delectus molestias quis?
            </div>
            <div
              className="form-find text-start mt-40 wow animate__animated animate__fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="d-flex justify-content-between">
                <div className="box-industry">
                  <select
                    value={defaultValues.industry}
                    name="industry"
                    className="form-input mr-10 select-active input-industry"
                    onChange={handleChange}
                  >
                    <option value={""} disabled>
                      Industry
                    </option>
                    {industries.map((industry) => (
                      <option key={industry.id} value={industry.id}>
                        {industry.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="box-industry">
                  <select name="city" onChange={handleChange} value={defaultValues.city} className="form-input mr-10 select-active input-location">
                    <option value={""} disabled>
                      Preferred City
                    </option>
                    {citiesInsideCurrRegion.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  className="form-input input-keysearch ms-4"
                  type="text"
                  name="title"
                  value={defaultValues.title}
                  onChange={handleChange}
                  placeholder="Job Title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
