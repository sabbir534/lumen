import { StarIcon } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"

export function HeroSocialProof() {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] text-muted-foreground">
      <AvatarGroup aria-hidden="true">
        {["AL", "JK", "SM", "DN"].map((initials, index) => (
          <Avatar key={initials} size="sm">
            <AvatarImage
              src={`/images/marketing/learners/${index + 1}.jpg`}
              alt=""
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        ))}
      </AvatarGroup>
      <span aria-hidden="true" className="flex gap-0.5 text-star">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} className="size-3.5 fill-current" />
        ))}
      </span>
      <span>4.8 from 28,000+ learners</span>
    </div>
  )
}
