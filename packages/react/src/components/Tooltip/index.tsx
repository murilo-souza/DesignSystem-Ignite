import * as TooltipRadix from '@radix-ui/react-tooltip'
import { DayCalendar, TooltipContent } from './styles'
import { ComponentProps } from 'react'

export interface TooltipProps extends ComponentProps<typeof DayCalendar> {
  day: number
  date: string
  isAvailable: boolean
}

export function Tooltip({ day, date, isAvailable, ...rest }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          <DayCalendar {...rest}>{day}</DayCalendar>
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent sideOffset={5} className="TooltipContent">
            {date} - {isAvailable ? 'Disponível' : 'Indisponível'}{' '}
            <TooltipRadix.Arrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
