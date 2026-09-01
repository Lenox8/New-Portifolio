import { ArrowDown } from "lucide-react";
import CornerCutButton from "../ui/neonblade-ui/corner-cut-button";

export default function AppBtn() {
  return (
    <div className="flex gap-4 flex-wrap">

      <CornerCutButton color="#fff" hoverColor="pink" hoverEffect="shift" hoverOutlined >
        <a href="/ResumeLenox.pdf" className="flex gap-2">download resume <span><ArrowDown /></span></a>
      </CornerCutButton>
    </div>
  );
}
