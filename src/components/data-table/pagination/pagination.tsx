import { type Dispatch, type FC, type SetStateAction } from "react";

import Input from "../../input";
import Label from "../../label";
import Button from "../../button";

interface PaginationProps {
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setGoToPage: Dispatch<SetStateAction<string>>;
  currentPage: number;
  goToPage: string;
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  setCurrentPage,
  currentPage,
  goToPage,
  setGoToPage,
}) => {
  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () => setCurrentPage(Math.max(1, currentPage - 1));
  const goToNextPage = () =>
    setCurrentPage(Math.min(totalPages, currentPage + 1));
  const goToLastPage = () => setCurrentPage(totalPages);

  const handleGoToPageSubmit = () => {
    const pageNumber = parseInt(goToPage);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setGoToPage("");
    }
  };

  const getPageNumbers = () => {
    const maxButtons = 5;
    const rangeStart = Math.max(
      1,
      Math.min(currentPage - 2, totalPages - maxButtons + 1)
    );
    const rangeEnd = Math.min(
      totalPages,
      totalPages <= maxButtons ? totalPages : rangeStart + maxButtons - 1
    );

    return Array.from(
      { length: rangeEnd - rangeStart + 1 },
      (_, i) => rangeStart + i
    );
  };

  return totalPages > 1 ? (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-1 flex-3">
        <Button
          variant="outline"
          size="sm"
          onClick={goToFirstPage}
          disabled={currentPage === 1}
          className="h-8 w-8 p-0"
        >
          <span className="mdi mdi-chevron-double-left" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="h-8 w-8 p-0"
        >
          <span className="mdi mdi-chevron-left text-md" />
        </Button>

        <div className="flex items-center gap-1 mx-2">
          {getPageNumbers().map((pageNum) => (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? "primary" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(pageNum)}
              className="h-8 w-8 p-0"
            >
              {pageNum}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="h-8 w-8 p-0"
        >
          <span className="mdi mdi-chevron-right" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={goToLastPage}
          disabled={currentPage === totalPages}
          className="h-8 w-8 p-0"
        >
          <span className="mdi mdi-chevron-double-right" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Label htmlFor="goToPage" className="text-sm font-medium">
          Go to page:
        </Label>
        <Input
          id="goToPage"
          type="number"
          min="1"
          max={totalPages}
          value={goToPage}
          onChange={(e) => setGoToPage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleGoToPageSubmit()}
          className="w-8 h-8"
          placeholder="1"
        />
        <Button
          size="sm"
          variant="primary"
          onClick={handleGoToPageSubmit}
          disabled={
            !goToPage ||
            parseInt(goToPage) < 1 ||
            parseInt(goToPage) > totalPages
          }
          className="h-8"
        >
          Go
        </Button>
      </div>
    </div>
  ) : null;
};

export default Pagination;
