import type { StoryObj, Meta } from '@storybook/react'

import { Tooltip, TooltipProps } from '@murilo-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    day: 5,
    date: '22 de outubro',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
