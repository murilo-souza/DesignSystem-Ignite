import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const DayCalendar = styled('button', {
  width: '$16',
  height: '$16',

  borderRadius: '$sm',
  border: 0,

  color: '$white',

  fontFamily: '$default',
  fontSize: '$md',

  background: '$gray600',

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',

  padding: '$3 $4',

  borderRadius: '$sm',

  fontFamily: '$tooltip',
})
