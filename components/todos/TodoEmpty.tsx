import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Folder } from "lucide-react";

export function TodoEmpty() {
  return (
    <Empty>
      <EmptyHeader className="space-y-3">
        <EmptyMedia variant="icon">
          <Folder className="h-5 w-5 text-muted-foreground" />
        </EmptyMedia>

        <EmptyTitle className="text-sm font-medium">No todos yet</EmptyTitle>

        <EmptyDescription className="text-sm text-muted-foreground">
          Add your first task by typing above and pressing Enter.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
