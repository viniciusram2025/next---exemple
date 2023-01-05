import { CloneMe } from '.';

export default {
  title: 'CloneMe',
  component: CloneMe,
  args: {
    children: 'CloneMe',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <CloneMe {...args} />
    </div>
  );
};
