import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import VueNiceButton from './src/VueNiceButton.vue';

describe('VueNiceButton', () => {
  it('renders with default props', () => {
    const wrapper = mount(VueNiceButton);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.attributes('type')).toBe('button');
  });

  it('renders button text from btnTitle prop', () => {
    const wrapper = mount(VueNiceButton, {
      props: { btnTitle: 'Click Me' },
    });
    expect(wrapper.text()).toContain('Click Me');
  });

  it('renders content from default slot', () => {
    const wrapper = mount(VueNiceButton, {
      slots: { default: 'Slot Content' },
    });
    expect(wrapper.text()).toContain('Slot Content');
  });

  it('applies primary button type classes', () => {
    const wrapper = mount(VueNiceButton, {
      props: { btnType: 'primary' },
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('bg-primary-900');
  });

  it('applies secondary button type classes', () => {
    const wrapper = mount(VueNiceButton, {
      props: { btnType: 'secondary' },
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('bg-secondary-800');
  });

  it('applies danger button type classes', () => {
    const wrapper = mount(VueNiceButton, {
      props: { btnType: 'danger' },
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('bg-redCust-730');
  });

  it('applies button size classes for btn-sm', () => {
    const wrapper = mount(VueNiceButton, {
      props: { size: 'btn-sm' },
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('h-[34px]');
  });

  it('applies button size classes for btn-md', () => {
    const wrapper = mount(VueNiceButton, {
      props: { size: 'btn-md' },
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('h-[38px]');
  });

  it('applies button size classes for btn-lg', () => {
    const wrapper = mount(VueNiceButton, {
      props: { size: 'btn-lg' },
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('h-[42px]');
  });

  it('applies disabled attribute when disabled prop is true', () => {
    const wrapper = mount(VueNiceButton, {
      props: { disabled: true },
    });
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  it('does not apply disabled when disabled is false', () => {
    const wrapper = mount(VueNiceButton, {
      props: { disabled: false },
    });
    expect(wrapper.attributes('disabled')).toBeUndefined();
  });

  it('applies custom type attribute', () => {
    const wrapper = mount(VueNiceButton, {
      props: { type: 'submit' },
    });
    expect(wrapper.attributes('type')).toBe('submit');
  });

  it('applies custom type attribute as reset', () => {
    const wrapper = mount(VueNiceButton, {
      props: { type: 'reset' },
    });
    expect(wrapper.attributes('type')).toBe('reset');
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(VueNiceButton);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('does not emit click when disabled', async () => {
    const wrapper = mount(VueNiceButton, {
      props: { disabled: true },
    });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('applies extraClass prop', () => {
    const wrapper = mount(VueNiceButton, {
      props: { extraClass: 'custom-class' },
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('custom-class');
  });

  it('applies titleClass prop', () => {
    const wrapper = mount(VueNiceButton, {
      props: { btnTitle: 'Test', titleClass: 'custom-title-class' },
    });
    const span = wrapper.find('span');
    expect(span.classes()).toContain('custom-title-class');
  });
});