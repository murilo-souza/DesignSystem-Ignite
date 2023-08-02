import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled(Toast.Root, {
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  listStyle: 'none',

  width: '$80',
  // height: '$20',

  padding: '$3 $5',

  div: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',

  color: '$white',

  marginBottom: '$3',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',

  color: '$gray200',
})

export const ToastAction = styled(Toast.Action, {
  marginBottom: '$8',
})
