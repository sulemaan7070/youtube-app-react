import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

function SkeletonCard() {
  return (
    <div className="flex flex-col mb-8">
      <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={310}
          height={218}
        />
      </div>
      <div className="flex text-white mt-3">
        <div className="flex items-start">
          <div className="flex h-9 w-9 rounded-full overflow-hidden">
            <Skeleton sx={{ bgcolor: "grey.900" }} variant="circular">
              <Avatar />
            </Skeleton>
          </div>
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm font-bold line-clamp-2">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={18}
            />
          </span>
          {/**skeleton for video title */}

          <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={12}
            />
          </span>

          {/**skeleton for time stamp and views */}
          <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={150}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
