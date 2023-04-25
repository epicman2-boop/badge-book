import { html } from 'lit';
import '../src/badge-book.js';

export default {
  title: 'BadgeBook',
  component: 'badge-book',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <badge-book
      style="--badge-book-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </badge-book>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
