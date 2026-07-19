import Badge from "../ui/neonblade-ui/badge";

export default function AppBadge() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      {/* Rectangle, custom color */}
      <Badge color="green" dot="flicker" shape="pill" size="md" variant="outline">
        Available for new projects
      </Badge>
    </div>
  );
}