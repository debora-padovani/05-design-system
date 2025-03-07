import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@test-ignite-ds/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <Text>Testando o elemento box!</Text>
            </>
        )
    },
    argTypes: {
      children: {
        control: { type: null }
      }
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}