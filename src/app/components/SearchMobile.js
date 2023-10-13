// components
import { DateSelection, HoursSelection, LocationSelection } from "./index.js";

const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* location selection */}
          <LocationSelection />
          {/* data selection */}
          <DateSelection />
          {/* hours selection */}
          <HoursSelection />
          {/* btn */}
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
