import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://xesque.rocketseat.dev/users/avatar/profile-9d50119f-ea41-485e-872a-3370531da83c-1614105495477.jpg',
        alt: 'Débora Cabral'
    },
    argTypes: {
      src: {
        control: { type: 'text' }
      }
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}