import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12 hover:cursor-pointer">
      <Avatar className="w-13 h-13">
        <AvatarImage src="https://avatars.githubusercontent.com/u/168176002?s=400&u=27e2a9872815829e4a90cac08864eb9f49ccc379&v=4" />
        <AvatarFallback>LM</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
    </div>
  );
}
