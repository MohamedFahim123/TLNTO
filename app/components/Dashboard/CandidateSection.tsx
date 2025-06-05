import { fetchApi } from "@/app/Actions/FetchApi";
import { getServerCookies } from "@/app/Actions/HandleServerCookies";
import Image from "next/image";
import Link from "next/link";
import Candidate from "./Candidate";

export interface CandidateInterface {
  img: string;
  title: string;
  job: string;
  des: string;
  rating: string;
  skills: string[];
  location: string;
  salary: string;
}

export default async function CandidateSection() {
  const region: string = await getServerCookies("region");
  const token = await getServerCookies("TLNTO_TOKEN");
  const fetchedCandidates = await fetchApi<{
    data: {
      candidates: CandidateInterface[];
    };
  }>(`company/all-candidates`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(fetchedCandidates);
  const candidates: CandidateInterface[] =
    fetchedCandidates?.data?.candidates || [];

  // const [currentPage, setCurrentPage] = useState<number>(1);

  // const next = () => {
  //   setCurrentPage((page) => page + 1);
  // };

  // const prev = () => {
  //   setCurrentPage((page) => page - 1);
  // };

  // const handleActive = (item: number) => {
  //   setCurrentPage(item);
  // };

  return (
    <>
      <div className="col-12">
        <div className="head d-flex align-items-center justify-content-between">
          <h4 className=" my-4">Candidates</h4>
          <div className="links bg-white border border-black border-opacity-10 border-1 rounded-3 py-2 px-4 text-black-50 ">
            <span className="d-flex align-items-center justify-content-center">
              <Image
                className="me-1 lh-2"
                width={14}
                height={14}
                src="/assets/imgs/page/dashboard/home.svg"
                alt="jobBox"
              />
              <Link
                className="d-flex align-items-center"
                href={`/${region}/dashboard`}
              >
                Admin
                <span className="mb-1 mx-1 text-black-50 fs-5">&gt; </span>
              </Link>
              Candidates
            </span>
          </div>
        </div>
        <div className="section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white">
          <div className="container">
            <div className={``}>
              <div className="box-padding">
                {candidates.length === 0 && <span>No Products Found </span>}
                <div className="row">
                  {candidates.map((item, i) => (
                    <div
                      className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12"
                      key={i}
                    >
                      <Candidate item={item} />
                    </div>
                  ))}
                </div>
                <div className="paginations">
                  {/* <Pagination
                    getPaginationGroup={getPaginationGroup}
                    currentPage={currentPage}
                    pages={pages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
