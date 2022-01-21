import ComingSoon from "@/components/common/coming_soon";
import Overlay from "@/components/common/overlay";

export default function Lectures() {
  return (
    <div>
      <Overlay>
        <ComingSoon event={"Shop"} time={"01 22 2022, 4:00 pm"} />
      </Overlay>
    </div>
  );
}
