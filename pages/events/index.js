import ComingSoon from "@/components/common/coming_soon";
import Overlay from "@/components/common/overlay";

export default function Events() {
  return (
    <div>
      <Overlay>
        <ComingSoon event={"Events"} time={"05 26 2029, 6:00 am"}/>
      </Overlay>
    </div>
  );
}
