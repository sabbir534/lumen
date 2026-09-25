import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { marketingAccountLinks } from "./navigation"

export function HeaderActions({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <Link
        href={marketingAccountLinks.login}
        onClick={onNavigate}
        className="px-1 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Log in
      </Link>
      <Link
        href={marketingAccountLinks.signup}
        onClick={onNavigate}
        className={cn(
          buttonVariants({ size: "lg" }),
          "h-10 gap-2 px-[18px] hover:text-primary-foreground has-data-[icon=inline-end]:pr-[18px]"
        )}
      >
        Get started
        <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
      </Link>
    </>
  )
}
