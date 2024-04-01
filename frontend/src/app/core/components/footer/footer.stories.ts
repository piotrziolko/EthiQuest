import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<FooterComponent> = {
  title: 'Core/FooterComponent',
  component: FooterComponent,
  tags: ['autodocs'],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    mainUrl: '/',
    title: 'Home',
    socialLinks: [
      {
        name: 'GitHub',
        url: '',
        logo: 'github',
      },
      {
        name: 'Twitter',
        url: '',
        logo: 'twitter',
      },
    ],
    footerLinks: [
      {
        title: 'Section 1',
        links: [
          {
            name: 'Link 1',
            url: '',
          },
          {
            name: 'Link 2',
            url: '',
          },
        ],
      },
      {
        title: 'Section 2',
        links: [
          {
            name: 'Link 1',
            url: '',
          },
          {
            name: 'Link 2',
            url: '',
          },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Primary: Story = {
  args: {},
};
