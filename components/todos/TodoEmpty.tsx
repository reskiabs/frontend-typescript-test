import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ArrowUpRightIcon, Folder } from "lucide-react";

export function TodoEmpty() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Folder />
        </EmptyMedia>
        <EmptyTitle>No Todo Yet</EmptyTitle>
        <EmptyDescription>
          You don&apos;t have any todo yet. Create one now.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  );
}
