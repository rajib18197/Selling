import { useState } from "react";

export default function Pagination({
  totalPage = 45,
  boundaryCount = 3,
  siblingCount = 2,
  defaultValue = 8,
}) {
  const [currentPage, setCurrentPage] = useState(defaultValue);

  function handleInc() {
    if (currentPage === totalPage) return;

    setCurrentPage((cur) => cur + 1);
  }

  function handleDec() {
    if (currentPage === 1) return;

    setCurrentPage((cur) => cur - 1);
  }

  return (
    <div className="flex gap-2 items-center">
      <div>
        <button onClick={handleDec}>Prev</button>
      </div>

      {currentPage - boundaryCount < 5 &&
        Array.from({ length: 9 }, (_, i) => (
          <button
            key={i + 1}
            className={`${currentPage === i + 1 ? "bg-red-400" : ""}`}
          >
            {i + 1}
          </button>
        ))}

      {currentPage - boundaryCount >= 5 && (
        <>
          <div className="flex gap-2 items-center">
            {Array.from({ length: boundaryCount }, (_, i) => (
              <button key={i + 1}>{i + 1}</button>
            ))}
          </div>

          <div>...</div>

          {totalPage - currentPage > 6 && (
            <div className="flex gap-2 items-center">
              {Array.from({ length: siblingCount }, (_, i) => (
                <button key={currentPage + i - siblingCount}>
                  {currentPage + i - siblingCount}
                </button>
              ))}

              <button className="bg-red-400">{currentPage}</button>

              {Array.from({ length: siblingCount }, (_, i) => (
                <button key={currentPage + i + 1}>{currentPage + i + 1}</button>
              ))}
            </div>
          )}
        </>
      )}

      {totalPage - currentPage > 6 && (
        <>
          <div>...</div>

          <div className="flex gap-2 items-center">
            {Array.from({ length: boundaryCount }, (_, i) => (
              <button key={totalPage + i - boundaryCount + 1}>
                {totalPage + i - boundaryCount + 1}
              </button>
            ))}
          </div>
        </>
      )}

      {totalPage - currentPage <= 6 &&
        Array.from({ length: 9 }, (_, i) => (
          <button
            key={totalPage + i - 8}
            className={`${
              currentPage === totalPage + i - 8 ? "bg-red-400" : ""
            }`}
          >
            {totalPage + i - 8}
          </button>
        ))}

      <div>
        <button onClick={handleInc}>Next</button>
      </div>
    </div>
  );
}
