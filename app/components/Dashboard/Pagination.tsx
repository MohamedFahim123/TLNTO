export default function Pagination({
  prev,
  currentPage,
  getPaginationGroup,
  next,
  pages,
  handleActive,
}: {
  getPaginationGroup: number[];
  currentPage: number;
  prev: () => void;
  next: () => void;
  pages: number;
  handleActive: (pageNumber: number) => void;
}) {
  return (
    <>
      <ul className="pager">
        {getPaginationGroup.length <= 0 ? null : (
          <li onClick={prev}>
            {currentPage === 1 ? null : <a className="pager-prev" />}
          </li>
        )}

        {getPaginationGroup.map((item, index) => {
          return (
            <li onClick={() => handleActive(item)} key={index}>
              <a
                className={
                  currentPage === item ? "page-number active" : "page-number"
                }
              >
                {item}
              </a>
            </li>
          );
        })}

        {getPaginationGroup.length <= 0 ? null : (
          <li onClick={next}>
            {currentPage >= pages ? null : <a className="pager-next" />}
          </li>
        )}
      </ul>
    </>
  );
}
