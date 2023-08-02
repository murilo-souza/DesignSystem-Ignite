import * as TooltipRadix from '@radix-ui/react-tooltip'
import { DayCalendar, TooltipContent } from './styles'

export interface TooltipProps {
  day: number
  date: string
}

export function Tooltip({ day, date }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          <DayCalendar>{day}</DayCalendar>
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent sideOffset={5} className="TooltipContent">
            {date} - indisponível <TooltipRadix.Arrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
