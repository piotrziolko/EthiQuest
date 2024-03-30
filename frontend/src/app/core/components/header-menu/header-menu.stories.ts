import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderMenuComponent } from './header-menu.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<HeaderMenuComponent> = {
  title: 'Core/HeaderMenuComponent',
  component: HeaderMenuComponent,
  tags: ['autodocs'],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<HeaderMenuComponent>;

export const Primary: Story = {
  args: {
    menuItems: [
      {
        title: 'Home',
        url: '/',
      },
      {
        title: 'About',
        url: '/about',
      },
      {
        title: 'Services',
        url: '/services',
        children: [
          {
            title: 'Service 1',
            description: 'Service 1 description',
            url: '/services/service-1',
          },
          {
            title: 'Service 2',
            description: 'Service 2 description',
            url: '/services/service-2',
          },
          {
            title: 'Service 3',
            description: 'Service 3 description',
            url: '/services/service-3',
          },
          {
            title: 'Service 4',
            description: 'Service 4 description',
            url: '/services/service-4',
          },
        ],
      },
    ],
  },
};
