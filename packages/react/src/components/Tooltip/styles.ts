import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const DayCalendar = styled('button', {
  width: '$16',
  height: '$16',

  borderRadius: '$sm',
  border: 0,

  backgroundColor: '$gray600',
  color: '$white',

  fontFamily: '$default',
  fontSize: '$md',
})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',

  padding: '$3 $4',

  borderRadius: '$sm',

  fontFamily: '$tooltip',
})
